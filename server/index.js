import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://instaverse:instaverse@instaverse.j8z5wqb.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

async function connectToMongoDB() {
    try {
        mongoose.connect(CONNECTION_URL, {
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
        await app.listen(PORT);
        console.log(`Server listening on port ${PORT}`);
    } catch (err) {
        console.log('Error starting server: ', err.message);
    }
}

startServer();
