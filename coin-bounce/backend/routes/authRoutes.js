import express from 'express';

const router = express.Router();

// testing route
router.get('/test', (req, res) => {
    res.json({ message: 'working' });
});

// login

// register
export default router;
