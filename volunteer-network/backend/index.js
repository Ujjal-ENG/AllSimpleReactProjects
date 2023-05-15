/* eslint-disable operator-linebreak */
/* eslint-disable no-tabs */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Volunteer Network Server!!' });
});
// mongoDB connection]
const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/?retryWrites=true&w=majority`;
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

        const eventCollections = client.db('Volunteer-Network').collection('Events');

        app.get('/total-events', async (req, res) => {
            try {
                const results = await eventCollections.estimatedDocumentCount();
                res.status(200).json({
                    success: true,
                    message: 'Total Count worked!!',
                    results,
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                    message: 'Error occurs while fetching Total Events',
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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on PORT 8080');
});
