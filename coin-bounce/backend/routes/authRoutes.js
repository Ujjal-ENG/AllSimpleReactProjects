/* eslint-disable import/extensions */
import express from 'express';
import { loginController } from '../controllers/authControllers.js';

const router = express.Router();

// testing route
router.get('/test', (req, res) => {
    res.json({ message: 'working' });
});

// login
router.post('/login', loginController);

// register
export default router;
