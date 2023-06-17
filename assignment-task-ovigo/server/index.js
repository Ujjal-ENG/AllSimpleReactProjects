/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-trailing-spaces */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

dotenv.config();

// PORT
const PORT = process.env.PORT || 8080;

// initialize the app
const app = express();

// default middleware
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is Running!!' });
});
// health route
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is Health is Good!!' });
});

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// jwt middleware
const verifyJWT = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized Accesss from server!!',
            });
        }
        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Unauthorized Access!!',
                });
            }
            req.user = decode;
            next();
        });
    } catch (error) {
        console.log(error);
    }
};

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // DB NAME and Collections Name
        const hotelsCollections = client.db('AssignmentHotel').collection('Hotels');
        const userCollection = client.db('AssignmentHotel').collection('Users');
        const userBookings = client.db('AssignmentHotel').collection('Bookings');

        // jwt security
        app.post('/jwt', (req, res) => {
            try {
                const user = req.body;
                const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.json({ token });
            } catch (error) {
                console.log(error);
            }
        });

        // check isAdmin MiddleWare
        const verifyAdmin = async (req, res, next) => {
            try {
                const { email } = req.user;
                const user = await userCollection.findOne({ email });

                if (user?.role !== 'admin') {
                    return res.status(403).json({
                        success: false,
                        message: 'Forbidden Access!!',
                    });
                }
                next();
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Internal Server Error',
                    error: error.message,
                });
            }
        };

        // hotels route
        app.get('/hotels', async (req, res) => {
          try {
              const query = req.query.placeName;

              const result = await hotelsCollections.find({ placeName: query }).toArray();

              res.status(200).json({ 
                success: true,
                data: result,
                 });
            } catch (error) {
                console.log(error);
            }
        });

        // users related api
        // check admin or not

        app.get('/users/admin/:email', verifyJWT, async (req, res) => {
            try {
                const { email } = req.params;

                const decodedEmail = req.user.email;

                if (decodedEmail !== email) {
                    return res.status(403).json({ admin: false });
                }
                const user = await userCollection.findOne({ email });
                // console.log(user);
                const result = { admin: user?.role === 'admin' };

                // res.status(200).json({
                //     success: true,
                //     message: 'Your are verified admin!',
                //     data: result,
                // });
                res.send(result);
            } catch (error) {
                console.log(error);
            }
        });
        
        // get all users
        app.get('/users', verifyJWT, verifyAdmin, async (req, res) => {
            try {
                const usersData = await userCollection.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Data found!!',
                    data: usersData,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when fetching the Users  data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });
        
        // user creation api
        app.post('/users', async (req, res) => {
            try {
                const { email } = req.body;
                const isExistUser = await userCollection.findOne({ email });
                if (isExistUser) {
                    return res.send({ message: 'Email is already registered' });
                }
                const result = await userCollection.insertOne({
                    ...req.body,
                });
                res.status(201).json({
                    success: true,
                    message: 'User created successfully!',
                    data: result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when creating the user data!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // post bookings
        app.post('/bookings', verifyJWT, async (req, res) => {
            try {
                const result = await userBookings.insertOne({ ...req.body });
                res.status(201).json({
                    success: true,
                    data: result,
                });
            } catch (error) {
                console.log(error);
            }
        });
        
        // get all bookings
        app.get('/bookings', verifyJWT, async (req, res) => {
            try {
                const query = req.query.email;
                const result = await userBookings.find({ userEmail: query }).toArray();
                res.status(200).json({
                    success: true,
                    data: result,
                });
            } catch (error) {
                console.log(error);
            }
        });
        
        // delete booking
        app.delete('/bookings/:id', verifyJWT, async (req, res) => {
            try {
                const { id } = req.params;
                const result = await userBookings.deleteOne({ _id: new ObjectId(id) });
                res.status(200).json({
                    success: true,
                    data: result,
                });
            } catch (error) {
                console.log(error);
            }
        });

        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

// app run
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
