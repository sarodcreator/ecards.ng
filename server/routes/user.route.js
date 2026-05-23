
import express from "express";
import { login, logout, register, updateProfile, verifyEmail, verifyLogin, requestPasswordReset, resetPassword, uploadProfilePhoto, deleteUser } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { resumeUpload, photoUpload } from "../middlewares/multer.js";

const router = express.Router();

// ──────────────────────────────────────────────────────────────
// PUBLIC ROUTES (No Auth)
// ──────────────────────────────────────────────────────────────
router.post("/register", register); // Create new user + send welcome email
router.post("/login", login); // Login + send security alert email
router.post("/verify-login", verifyLogin); // Verify login OTP
router.post("/verify-email", verifyEmail); // Verify email OTP
router.post("/forgot-password", requestPasswordReset); // Request password reset OTP
router.post("/reset-password", resetPassword); // Reset password with OTP

// ──────────────────────────────────────────────────────────────
// PROTECTED ROUTES (Require Auth)
// ──────────────────────────────────────────────────────────────
router.get("/logout", isAuthenticated, logout); // Logout (clear cookie)
router.post("/profile/update", isAuthenticated, resumeUpload, updateProfile); // Update profile + resume upload
router.post("/profile/photo", isAuthenticated, photoUpload, uploadProfilePhoto); // Upload profile photo
router.delete("/delete", isAuthenticated, deleteUser); // Delete user account

export default router;