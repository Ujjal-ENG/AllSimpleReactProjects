/* eslint-disable no-restricted-syntax */
import cors from 'cors';
import express from 'express';

// initialize the PORT
const PORT = process.env.PORT || 8080;

const app = express();

// default middleware
app.use(express.json());
app.use(cors());

// data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
];

// default routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Node JS Intern Task Server!!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'This project Health is Very Good!!!' });
});

// send all user
app.get('/api/users', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Successfully get the All Users',
            data: users,
        });
    } catch (error) {
        console.log(error);
    }
});

// get the user based on specific id
app.get('/api/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        let findUser;
        for (const i in users) {
            if (users[i].id === Number(id)) {
                findUser = users[i];
            } else {
                findUser = 'User id is not in database!!';
            }
        }
        res.status(200).json({
            success: true,
            message: 'Successfully get the  User based on the id',
            data: findUser,
        });
    } catch (error) {
        console.log(error);
    }
});

// listen the app
app.listen(PORT, () => {
    console.log('The Server is running on PORT 8080');
});
