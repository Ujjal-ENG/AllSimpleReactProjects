/* eslint-disable no-console */
/* eslint-disable indent */
import cors from 'cors';
import express from 'express';
import categoriesData from './data/categories.json' assert { type: "json" };
const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('This is the root route');
});

app.get('/categories', (req, res) => {
    res.json({
        message: 'success',
        results: categoriesData.length,
        data: categoriesData,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port:3000');
});
