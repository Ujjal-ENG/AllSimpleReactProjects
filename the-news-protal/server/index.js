/* eslint-disable no-console */
/* eslint-disable indent */
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('This is the root route');
});

app.listen(3000, () => {
    console.log('Server is running on port:3000');
});
