import express from 'express';
import { signup, login } from "../controllers/authController";

const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/login', login);

export default router;