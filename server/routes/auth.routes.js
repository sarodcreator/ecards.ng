import express from "express";
import { googleAuth } from "../controllers/googleAuth.controller.js";
import {
  register,
  login,
  verifyLogin,
  logout
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-login", verifyLogin);
router.post("/logout", logout);

router.post("/google-auth", googleAuth);

export default router;
