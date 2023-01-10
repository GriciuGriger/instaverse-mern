import React from 'react'
import Post from './Post/Post.js' 
import usestyles from './styles.js';
import { useSelector } from 'react-redux';

const Posts = () => {
    const classses = usestyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
        </>
    );
}

export default Posts;
