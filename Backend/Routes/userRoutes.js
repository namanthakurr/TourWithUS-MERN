import express from "express";
import { signup, login, logout } from "../controllers/authController.js";

// ROUTES

const router = express.Router();

router.post("/signUp", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;