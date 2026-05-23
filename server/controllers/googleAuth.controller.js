import { User } from "../models/user.model.js";
import { verifyGoogleToken } from "../utils/googleAuth.js";

export const googleAuth = async (req, res) => {
  try {
    // const { token} = req.body;
    // if (!token) {
    //   return res.status(400).json({ message: "Token required", success: false });
    // }

    const payload = await verifyGoogleToken(token);
    const { sub, email, name, picture } = payload;

    let user = await User.findOne({ email });

    // 🔗 LINK EXISTING ACCOUNT
    if (user) {
      if (!user.googleId) {
        user.googleId = sub;
        user.authProvider = "google";
        user.isEmailVerified = true;
        await user.save();
      }
    } else {
      user = await User.create({
        fullname: name,
        email,
        dob,
        country,
        googleId: sub,
        authProvider: "google",
        isEmailVerified: true,
        profile: { profilePhoto: picture }
      });
    };

    const jwtToken = user.generateAuthToken();
    const cleanUser = (({ _id, fullname, email, dob, country, profile }) => ({
      _id,
      fullname,
      email,
      dob,
      country,
      profile
    }))(user);

    return res
      .cookie("token", jwtToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
      .json({
        message: `Welcome ${cleanUser.fullname}`,
        user: cleanUser,
        success: true
      });

  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(401).json({ message: "Google authentication failed", success: false });
  }
};
