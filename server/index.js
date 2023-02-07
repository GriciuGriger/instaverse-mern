import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

dotenv.config()

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

async function connectToMongoDB() {
    try {
        mongoose.connect(process.env.CONNECTION_URL, {
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB');

    } catch (err) {
        console.log('Connection to MongoDB failed: ', err.message);
    }
}

async function startServer() {
    try {
        await connectToMongoDB();
        await app.listen(process.env.PORT);
        console.log(`Server listening on port ${process.env.PORT}`);
    } catch (err) {
        console.log('Error starting server: ', err.message);
    }
}

startServer();
