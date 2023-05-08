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
        // get all the coffees here
        app.get('/all-coffees', async (req, res) => {
            const allCoffee = await coffeeShop.find().toArray();
            res.status(200).json({
                success: true,
                message: 'Your Successfully get the Data',
                allCoffee,
            });
        });

        // create the coffee here
        app.post('/create-coffee', async (req, res) => {
            const data = req.body.formData;
            const coffee = await coffeeShop.insertOne(data);
            res.status(200).json({
                success: true,
                message: 'Your Successfully Created the new Coffee!!',
                coffee,
            });
        });
    } catch (error) {
        console.log(error);
    }
}
run().catch(console.dir);

// now initalize the listing port and start the server here
const PORT = process.env.PORT || 9889;

// listen the port
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
