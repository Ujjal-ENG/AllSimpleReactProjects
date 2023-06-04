/* eslint-disable no-tabs */
// dependencies
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import stripePackage from 'stripe';

dotenv.config();

const stripe = stripePackage(process.env.PAYMENT_API_KEY);

const PORT = process.env.PORT || 8080;

// app initialize
const app = express();

// default middleware
app.use(express.json());
app.use(cors());

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

// default route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Server' });
});

// health route
app.get('/health', (req, res) => {
    res.json({ message: 'This server Health is very good!!' });
});

// jwt token
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
        const paymentCollection = client.db('FlavorFlow').collection('Payments');
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

        // users related api
        // check admin or not
        app.get('/users/admin/:email', verifyJWT, async (req, res) => {
            try {
                const { email } = req.params;

                const decodedEmail = req.user.email;

                if (decodedEmail !== email) {
                    return res.status(403).json({ message: 'Forbidden Access' });
                }
                const user = await userCollection.findOne({ email });
                const result = { admin: user?.role === 'admin' };

                res.status(200).json({
                    success: true,
                    message: 'Your are verified admin!',
                    data: result,
                });
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

        // update user document
        app.patch('/users/admin/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const updateDoc = {
                    $set: {
                        role: 'admin',
                    },
                };
                const result = await userCollection.updateOne({ _id: new ObjectId(id) }, updateDoc);
                res.status(200).json({
                    success: true,
                    message: 'User is Updated Successfully!!',
                    data: result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when Updating the Users data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // user delete collection
        app.delete('/users/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
                if (result.deletedCount === 1) {
                    res.status(201).json({
                        success: true,
                        message: 'Successfully deleted one Item!!',
                    });
                }
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when deleting the User data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // user creation api
        app.post('/users', async (req, res) => {
            try {
                const { email } = req.body;
                console.log(email);
                // const isExistUser = await userCollection.findOne({ email });
                // if (isExistUser) {
                //     return res.status(404).json({ message: 'Email is already Registered' });
                // }
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

        // post menu item
        app.post('/menu', verifyJWT, verifyAdmin, async (req, res) => {
            try {
                const data = req.body;

                const result = await menuCollection.insertOne(data);
                res.status(201).json({
                    success: true,
                    message: 'Data Is Successfully Inserted',
                    result,
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when posting the Menu data!!',
                    error: error.message, // Include the error message in the response
                });
            }
        });

        // Menu Item Delete api
        app.delete('/menu/:id', verifyJWT, verifyAdmin, async (req, res) => {
            try {
                const { id } = req.params;
                const result = await menuCollection.deleteOne({ _id: new ObjectId(id) });
                if (result.deletedCount === 1) {
                    res.status(200).json({
                        success: true,
                        message: 'You Successfully Deleted Items!!',
                    });
                }
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Error occurred when deleting the Menu data!!',
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
        app.get('/carts', verifyJWT, async (req, res) => {
            try {
                const { email } = req.query;
                if (!email) {
                    res.status(200).json([]);
                }

                const decodedEmail = req.user.email;

                if (email !== decodedEmail) {
                    return res.status(403).json({
                        success: false,
                        message: 'Forbidden Access!!',
                    });
                }

                const result = await cartCollection.find({ user: email }).toArray();
                res.status(200).json({
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

        // payment options
        app.post('/create-payment-intent', verifyJWT, async (req, res) => {
            try {
                const { price } = req.body;

                const amount = price * 100;
                // Create a PaymentIntent with the order amount and currency
                const paymentIntent = await stripe.paymentIntents.create({
                    amount,
                    currency: 'usd',
                    payment_method_types: ['card'],
                });

                res.json({
                    clientSecret: paymentIntent.client_secret,
                });
            } catch (error) {
                console.log(error);
            }
        });

        // payment done related data store api
        app.post('/payments', verifyJWT, async (req, res) => {
            try {
                console.log(req.body);
                const payment = req.body;
                const result = await paymentCollection.insertOne(payment);
                const deleteResults = await cartCollection.deleteMany({
                    _id: { $in: payment.cartItems.map((id) => id) },
                });

                res.status(201).json({
                    success: true,
                    data: result,
                    deleteResults,
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

app.listen(PORT, () => {
    console.log('server is running on the port 8080');
});
