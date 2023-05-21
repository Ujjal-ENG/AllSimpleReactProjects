/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zzrczzq.mongodb.net/Coin-Bounce?retryWrites=true&w=majority`;

const connectMongo = async () => {
    try {
      await mongoose.connect(connectionURL);
      console.log('DB is Connected');
    } catch (error) {
        console.log(error);
    }
};

export default connectMongo;
