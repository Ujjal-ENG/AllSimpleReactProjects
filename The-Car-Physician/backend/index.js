import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// config env files
dotenv.config();

// app intialization
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// default route
app.get('', (req, res) => {
    res.status(200).json({ message: "Hello from The Car Physician Server,What's Up!!!" });
});

// listen port
const PORT = process.env.PORT || 8080;

// listen function
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
