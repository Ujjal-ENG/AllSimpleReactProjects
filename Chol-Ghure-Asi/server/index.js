const cors = require('cors');
const express = require('express');
const data = require('./data/travelSite.json');
const roomData = require('./data/roomdata.json');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get('/all-travel-data', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Succesffully get the Data',
        results: data.length,
        data,
    });
});

app.get('/single-booking/:id', (req, res) => {
    const { id } = req.params;
    const findData = data.data.find((el) => el.id === Number(id));
    res.status(200).json({
        success: true,
        message: 'Succesffully get the Data',
        results: data.length,
        findData,
    });
});

app.get('/search-room', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Succesffully get the Data',
        results: roomData.room.length,
        roomData: roomData.room,
    });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
