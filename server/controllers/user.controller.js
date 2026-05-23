import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
import sgMail from "@sendgrid/mail";
import { redisClient } from "../utils/redis.client.js";
import { safeRedis } from "../utils/safeRedis.js";

// ───────── CONSTANTS ─────────
const OTP_SEND_RATE_LIMIT = 5;
const OTP_SEND_WINDOW = 3600;
const MAX_FAILED_OTP = 3;
const OTP_LOCKOUT_DURATION = 1800;
const MAX_FAILED_LOGIN = 8;
const LOGIN_LOCKOUT_DURATION = 1800;

// ───────── EMAIL ─────────
sgMail.setApiKey(process.env.SENDGRID_EMAIL_PASSWORD);

const sendEmail = async (to, subject, html) => {
  try {
    await sgMail.send({
      to,
      from: process.env.SENDGRID_EMAIL_USERNAME,
      subject,
      html
    });
  } catch (err) {
    console.error("SendGrid Error:", err.message);
  }
};

// ───────── OTP RATE LIMIT ─────────
async function checkOtpSendLimit(user) {
  const key = `otp_send:${user.email}`;

  return safeRedis(async () => {
    const attempts = Number(await redisClient.get(key) || 0);
    if (attempts >= OTP_SEND_RATE_LIMIT) return false;

    await redisClient.incr(key);
    if (attempts === 0) await redisClient.expire(key, OTP_SEND_WINDOW);
    return true;
  }, async () => {
    const now = Date.now();
    const start = user.security.otpSendWindowStart?.getTime() || 0;

    if (now - start > OTP_SEND_WINDOW * 1000) {
      user.security.otpSendCount = 1;
      user.security.otpSendWindowStart = new Date();
    } else {
      user.security.otpSendCount++;
    }

    await user.save();
    return user.security.otpSendCount <= OTP_SEND_RATE_LIMIT;
  });
}

// ───────── OTP VERIFY ─────────
async function attemptOtpVerify(user, otp, hashField, expiresField) {
  const now = Date.now();

  if (user.security.otpLockUntil && user.security.otpLockUntil > now) {
    return { success: false, message: "OTP locked. Try later." };
  }

  const otpHash = crypto.createHash("sha256").update(otp).digest("hex");

  if (user[hashField] !== otpHash || user[expiresField] < now) {
    user.security.failedOtpAttempts++;

    if (user.security.failedOtpAttempts >= MAX_FAILED_OTP) {
      user.security.otpLockUntil = new Date(now + OTP_LOCKOUT_DURATION * 1000);
      user.security.failedOtpAttempts = 0;
    }

    await user.save();
    return { success: false, message: "Invalid or expired OTP" };
  }

  user.security.failedOtpAttempts = 0;
  user.security.otpLockUntil = null;
  user[hashField] = undefined;
  user[expiresField] = undefined;
  await user.save();

  return { success: true };
}

// ───────── REGISTER ─────────
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Email exists", success: false });
    }

    const user = new User({
      fullname,
      email,
      phoneNumber,
      dob,
      country,
      password: await bcrypt.hash(password, 10)
    });

    if (!(await checkOtpSendLimit(user))) {
      return res.status(429).json({ message: "Too many OTPs", success: false });
    }

    const otp = user.generateVerificationOtp();
    await user.save();

    await sendEmail(email, "Verify Email", `<h2>Your OTP: ${otp}</h2>`);

    res.status(201).json({ message: "Signup successful", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ───────── LOGIN ─────────
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }

    if (user.security.loginLockUntil && user.security.loginLockUntil > Date.now()) {
      return res.status(429).json({ message: "Login locked", success: false });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      user.security.failedLoginAttempts++;

      if (user.security.failedLoginAttempts >= MAX_FAILED_LOGIN) {
        user.security.loginLockUntil = new Date(Date.now() + LOGIN_LOCKOUT_DURATION * 1000);
        user.security.failedLoginAttempts = 0;
      }

      await user.save();
      return res.status(400).json({ message: "Invalid credentials", success: false });
    }

    user.security.failedLoginAttempts = 0;
    user.security.loginLockUntil = null;
    await user.save();

    const otp = user.generateTwoFactorOtp();
    await user.save();
    await sendEmail(email, "Login OTP", `<h2>Your OTP: ${otp}</h2>`);

    res.json({ message: "OTP sent", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ───────── VERIFY LOGIN ─────────
export const verifyLogin = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    const result = await attemptOtpVerify(user, otp, "twoFactorOtpHash", "twoFactorOtpExpires");
    if (!result.success) return res.status(400).json(result);

    const token = user.generateAuthToken();
    res.cookie("token", token, { httpOnly: true }).json({
      message: "Login successful",
      success: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ──────────────────────────────────────────────────────────────
// 4. LOGOUT
// ──────────────────────────────────────────────────────────────
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({ message: "Logged out", success: true });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 5. UPDATE PROFILE (WITH RESUME UPLOAD)
// ──────────────────────────────────────────────────────────────
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, country } = req.body;
        const file = req.file;
        const userId = req.id;
        let user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found", success: false });

        // Update fields
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (country) user.profile.country = country;


        await user.save();
        const cleanUser = (({ _id, fullname, email, phoneNumber, dob, country, profile }) => ({ _id, fullname, email, phoneNumber, dob, country, profile }))(user);

        return res.status(200).json({ message: "Profile updated", user: cleanUser, success: true });

    } catch (error) {
        console.error("Update Profile Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 6. UPLOAD PROFILE PHOTO
// ──────────────────────────────────────────────────────────────
export const uploadProfilePhoto = async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ message: "No file uploaded", success: false });

        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
            folder: 'gigsyde/profile_photos',
            public_id: `photo_${req.id}`
        });

        const user = await User.findById(req.id);
        if (!user) return res.status(404).json({ message: "User not found", success: false });

        if (user.profile.profilePhotoPublicId) {
            await cloudinary.uploader.destroy(user.profile.profilePhotoPublicId);
        }

        user.profile.profilePhoto = cloudResponse.secure_url;
        user.profile.profilePhotoPublicId = cloudResponse.public_id;
        await user.save();

        const cleanUser = (({ _id, fullname, email, phoneNumber, dob, country, profile }) => ({ _id, fullname, email, phoneNumber, dob, country, profile }))(user);
        return res.status(200).json({ message: "Photo updated", user: cleanUser, success: true });

    } catch (error) {
        console.error("Upload Photo Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 8. VERIFY EMAIL
// ──────────────────────────────────────────────────────────────
export const verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) return res.status(400).json({ message: "Email & OTP required", success: false });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found", success: false });

        const result = await attemptOtpVerify(user, otp, 'verificationOtpHash', 'verificationOtpExpires');
        if (!result.success) return res.status(result.message.includes('Too many') ? 429 : 400).json({ message: result.message, success: false });

        user.isEmailVerified = true;
        await user.save();
        return res.status(200).json({ message: "Email verified", success: true });

    } catch (error) {
        console.error("Verify Email Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 9. REQUEST PASSWORD RESET
// ──────────────────────────────────────────────────────────────
export const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email required", success: false });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found", success: false });

        if (!await checkOtpSendLimit(email)) return res.status(429).json({ message: "Too many OTPs", success: false });

        const otp = user.generateResetOtp();
        await user.save();
        await sendOtpEmail(email, otp, 'Reset Password OTP');
        return res.status(200).json({ message: "OTP sent", success: true });

    } catch (error) {
        console.error("Reset Request Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 10. RESET PASSWORD
// ──────────────────────────────────────────────────────────────
export const resetPassword = async (req, res) => {
    try {
        const { email, otp, password } = req.body;
        if (!email || !otp || !password) return res.status(400).json({ message: "All fields required", success: false });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found", success: false });

        const result = await attemptOtpVerify(user, otp, 'resetOtpHash', 'resetOtpExpires');
        if (!result.success) return res.status(result.message.includes('Too many') ? 429 : 400).json({ message: result.message, success: false });

        user.password = await bcrypt.hash(password, 10);
        await user.save();
        return res.status(200).json({ message: "Password reset", success: true });

    } catch (error) {
        console.error("Reset Password Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// ──────────────────────────────────────────────────────────────
// 11. DELETE USER (WITH FILE CLEANUP)
// ──────────────────────────────────────────────────────────────
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        if (!user) return res.status(404).json({ message: "User not found", success: false });

        if (user.profile.profilePhotoPublicId) await cloudinary.uploader.destroy(user.profile.profilePhotoPublicId);

        await User.findByIdAndDelete(req.id);
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({ message: "Account deleted", success: true });

    } catch (error) {
        console.error("Delete User Error:", error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

