import express from 'express';
import {login_user, register_user } from '../controller/auth.controller.js';

const router = express.Router();

router.post("/login", login_user)
router.post("/registor", register_user)

export default router