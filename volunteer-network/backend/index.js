/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-tabs */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

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

        // total events
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

        // events
        app.get('/events', async (req, res) => {
            try {
                const page = Number(req.query.page) || 0;
                const perPage = Number(req.query.limit) || 7;
                const volunteers = await eventCollections
                    .find()
                    .skip(page * perPage)
                    .limit(perPage)
                    .toArray();

                res.status(200).json({
                    success: false,
                    message: 'Pagination Product shown',
                    volunteers,
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                    message: 'Error occurs while fetching Events',
                });
            }
        });

        // update
        app.patch('/update-events/:id', async (req, res) => {
            try {
                const { id } = req.params;

                const updateDoc = {
                    $set: {
                        ...req.body.formData,
                    },
                };
                const result = await eventCollections.updateOne(
                    { _id: new ObjectId(id) },
                    updateDoc
                );

                res.status(201).json({
                    success: true,
                    message: 'Events Updated!!',
                    result,
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                    message: 'Error occurs while Updating the Events',
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
