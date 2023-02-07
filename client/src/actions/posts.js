import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

//Action Creators
export const getPosts = async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload : data});
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
    } catch (err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        console.log("Update fired")
        const { data } = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (_id) => async (dispatch) => {
    try {
         await api.deletePost(_id);
         
         dispatch({type: DELETE, payload: _id});
    } catch (err) {
        console.log(err.message);
    }
}

export const likePost = (_id) => async (dispatch) => {
    try {
        await api.likePost(_id);

        dispatch({type: UPDATE, payload: _id});
    } catch (err) {
        console.log(err.message);
    }
}
