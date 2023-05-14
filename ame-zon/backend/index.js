import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';

// config dotenv file
dotenv.config()

// initialize the express app
const app = express()

// initialize the middleware
app.use(express.json())
app.use(cors())

// initialize the default route
app.get("/", (req, res) => {
  res.status(200).json("Hello from Ame||Zon server,,,by Ujjal Kumar Roy")
})


const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // server name
    const productsCollection = client.db("ame-zon").collection("Products")

    // get all products
    app.get("/all-products", async (req, res) => {
      try {
        const getProduct = await productsCollection.find().toArray()
        res.status(200).json({
          success: true,
          message: "Successfully get the all Products!!",
          products: getProduct
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          success: false,
          message: "Error Occurs from all Products"
        })
      }
    })


    // paginition products
    app.get("/pagination-products", async (req, res) => {
      try {
        const totalProducts = await productsCollection.estimatedDocumentCount()
        res.status(200).json({
          success: true,
          totalProducts
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          success: false,
          message: "Error Occurs while the Pagination Products Load!!"
        })
      }
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// server listen and port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running on 8080 port");
})