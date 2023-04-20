/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { userName } = req.body;
    return res.json({ userName, secret: 'sha256...' });
});

app.listen(3000, () => {
    console.log('server is running at 3000');
});
