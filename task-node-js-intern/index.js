import cors from 'cors';
import express from 'express';

// initialize the PORT
const PORT = process.env.PORT || 8080;

const app = express();

// default middleware
app.use(express.json());
app.use(cors());
// default routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Node JS Intern Task Server!!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'This project Health is Very Good!!!' });
});
// listen the app
app.listen(PORT, () => {
    console.log('The Server is running on PORT 8080');
});
