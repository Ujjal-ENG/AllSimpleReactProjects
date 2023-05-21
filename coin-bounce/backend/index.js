/* eslint-disable import/extensions */
// dependencies
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './database/connectDB.js';
import authRoutes from './routes/authRoutes.js';

// globally config
dotenv.config();

// port declare
const PORT = process.env.PORT || 8080;

// connection the database
connectDB();

// initialize the app
const app = express();

// added the default middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// default routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello From server' });
});

// health route
app.get('/health', (req, res) => {
    res.json({ message: 'This is the health route!!' });
});

// created routes
app.use('/api/v1/auth', authRoutes);

// app listen here
app.listen(PORT, () => {
    console.log(`App is running on the PORT ${PORT}`);
});
