import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
// config env files
dotenv.config();

// app initialization
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// default route
app.get('', (req, res) => {
    res.status(200).json({ message: "Hello from The Car Physician Server,What's Up!!!" });
});

// mongoDB Connection Codes
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/?retryWrites=true&w=majority`;
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
        // Connect the client to the server(optional starting in v4.7)
        await client.connect();
        const serviceCollection = client.db('theCarPhysician').collection('Services');

        // get all services
        app.get('/get-services', async (req, res) => {
            try {
                const services = await serviceCollection.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Successfully Get the all Services!!',
                    services,
                });
            } catch (error) {
                console.log(error);
                res.status(404).json({
                    success: false,
                    message: 'Error Occur in Get Services Data',
                    error,
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

// listen port
const PORT = process.env.PORT || 8080;

// listen function
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
