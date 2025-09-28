import express from 'express';
import {login_user, register_user, logout_user, get_current_user } from '../controller/auth.controller.js';
import { authMiddleware } from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/login", login_user)
router.post("/registor", register_user)
router.post("/logout", logout_user)
router.get("/me", authMiddleware, get_current_user)

export default router