// user.model.js
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import crypto from "crypto";

// const educationSchema = ({
//     degree: { type: String },
//     school: { type: String },
//     dateStarted: { type: String },
//     dateEnded: { type: String },
// }, { _id: false });

// const experienceSchema = ({
//     companyRole: { type: String },
//     company: { type: String },
//     role: { type: String },
//     dateStarted: { type: String },
//     dateEnded: { type: String },
// }, { _id: false });

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    dob: { 
        type: String,
        required: true 
    },
    country: { 
        type: String,
        required: true 
    },
	authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local"
    },

    googleId: String,
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    verificationOtpHash: {
        type: String
    },
    verificationOtpExpires: {
        type: Date
    },
    resetOtpHash: {
        type: String
    },
    resetOtpExpires: {
        type: Date
    },
    twoFactorOtpHash: {
        type: String
    },
    twoFactorOtpExpires: {
        type: Date
    },
    profile: {
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        profilePhoto: {
            type: String,
            default: ""
        },
        profilePhotoPublicId: {
            type: String
        }
    },
	security: {
  failedLoginAttempts: { type: Number, default: 0 },
  loginLockUntil: { type: Date },

  failedOtpAttempts: { type: Number, default: 0 },
  otpLockUntil: { type: Date },

  otpSendCount: { type: Number, default: 0 },
  otpSendWindowStart: { type: Date }
}
}, { timestamps: true });

function arrayLimit(val){
    return val.length <= 3;
}

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
};

userSchema.methods.generateVerificationOtp = function () {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
    this.verificationOtpHash = crypto.createHash('sha256').update(otp).digest('hex');
    this.verificationOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    return otp;
};

userSchema.methods.generateResetOtp = function () {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
    this.resetOtpHash = crypto.createHash('sha256').update(otp).digest('hex');
    this.resetOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    return otp;
};

userSchema.methods.generateTwoFactorOtp = function () {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
    this.twoFactorOtpHash = crypto.createHash('sha256').update(otp).digest('hex');
    this.twoFactorOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    return otp;
};

export const User = mongoose.model('User', userSchema);
