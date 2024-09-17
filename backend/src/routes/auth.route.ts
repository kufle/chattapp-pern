import express from "express";
import { login, logout, register, getMe } from "../controllers/auth.controller.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get('/me', protectedRoute, getMe);
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

export default router;