/* eslint-disable no-tabs */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
// mongodb

import { MongoClient, ServerApiVersion } from 'mongodb';

// config the dotenv
dotenv.config();

// initalize the app
const app = express();

// initialize the middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// Connect the client to the server	(optional starting in v4.7)
await client.connect();
// Send a ping to confirm a successful connection
await client.db('admin').command({ ping: 1 });
console.log('Pinged your deployment. You successfully connected to MongoDB!');
const database = client.db('CoffeeShop');
const coffeeShop = database.collection('coffee');

async function run() {
    try {
        const doc = {
            title: 'Record of a Shriveled Datum',
            content: 'No bytes, no problem. Just insert a document, in MongoDB',
        };

        await coffeeShop.insertOne(doc);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// now initalize the listing port and start the server here
const PORT = process.env.PORT || 9889;

// listen the port
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
