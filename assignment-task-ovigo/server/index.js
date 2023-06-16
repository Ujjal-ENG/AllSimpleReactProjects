/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-trailing-spaces */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

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

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // DB NAME and Collections Name
        const hotelsCollections = client.db('AssignmentHotel').collection('Hotels');

        // hotels route
        app.get('/hotels', async (req, res) => {
            try {
              const result = await hotelsCollections.find().toArray();
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
