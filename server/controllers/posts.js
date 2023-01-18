import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const getPosts = async (req, res) => {
    try {
    const postMessage = await PostMessage.find()

    res.status(200).json(postMessage);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
}

const getPost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid ID for MongoDB format');

    try {
        const postMessage = await PostMessage.findById(id);
        res.status(200).json(postMessage);
    } catch (err) {
        console.log(err);
        res.status(404).json({message: err.message});
    }
}

const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid ID for MongoDB format');
    
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid ID for MongoDB format');

    try {
        await PostMessage.findByIdAndDelete(id);
        res.status(200);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const likePost = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true});
    console.log(updatedPost);
    res.json(updatedPost);
}

export { getPosts, getPost, createPost, updatePost, deletePost, likePost };