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

        const MenuCollection = client.db('FlavorFlow').collection('Menus');

        // get menu
        app.get('/menu', async (req, res) => {
            try {
                const categoryData = await MenuCollection.find().toArray();
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
