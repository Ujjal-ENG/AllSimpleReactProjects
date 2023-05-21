// dependencies
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`App is running on the PORT ${PORT}`);
});
