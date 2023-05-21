/* eslint-disable import/extensions */
import express from 'express';
import { loginController, registerController } from '../controllers/authControllers.js';

const router = express.Router();

// testing route
router.get('/test', (req, res) => {
    res.json({ message: 'working' });
});

// login
router.post('/login', loginController);

// register
router.post('/register', registerController);

// register
export default router;
