/* eslint-disable no-tabs */
// dependencies
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();
const PORT = process.env.PORT || 8080;

// app initialize
const app = express();

// default middleware
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Server' });
});

// health route
app.get('/health', (req, res) => {
    res.json({ message: 'This server Health is very good!!' });
});

// mongodb database
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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db('FlavorFlow').collection('Users');
        const menuCollection = client.db('FlavorFlow').collection('Menus');
        const reviewCollection = client.db('FlavorFlow').collection('Reviews');
        const cartCollection = client.db('FlavorFlow').collection('Carts');

        // users related api

        // user creation api
        app.post('/users', async (req, res) => {
            try {
                const { email } = req.body;
                const isExistUser = await userCollection.findOne({ email });
                if (isExistUser) {
                    return res.status(404).json({ message: 'Email is already Registered' });
                }
                const result = await userCollection.insertOne({
                    ...req.body,
                });
                res.status(201).json({
                    success: true,
                    message: 'User Created Successfully!!',
                    data: result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when creating the Users data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });
        // menu related api
        // get menu
        app.get('/menu', async (req, res) => {
            try {
                const categoryData = await menuCollection.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Data found!!',
                    data: categoryData,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when fetching the Menu data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // All reviews related api
        // get reviews
        app.get('/reviews', async (req, res) => {
            try {
                const categoryData = await reviewCollection.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Data found!!',
                    data: categoryData,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when fetching the Review data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // All carts related api

        // cart get collection
        app.get('/carts', async (req, res) => {
            try {
                const { email } = req.query;
                const result = await cartCollection.find({ user: email }).toArray();
                res.status(201).json({
                    success: true,
                    message: 'Cart Item is Created!!',
                    data: result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when Posting the Cart data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // cart delete collection
        app.delete('/carts/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const result = await cartCollection.deleteOne({ _id: id });
                if (result.deletedCount === 1) {
                    res.status(201).json({
                        success: true,
                        message: 'Successfully deleted one Item!!',
                    });
                }
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when deleting the Cart data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });
        // cart collection
        app.post('/carts', async (req, res) => {
            try {
                const { item } = req.body;
                const result = await cartCollection.insertOne(item);
                res.status(201).json({
                    success: true,
                    message: 'Cart Item is Created!!',
                    data: result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when Posting the Cart data!!',
                    error: error.message, // Include the error message in the response
                });
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

app.listen(PORT, () => {
    console.log('server is running on the port 8080');
});
