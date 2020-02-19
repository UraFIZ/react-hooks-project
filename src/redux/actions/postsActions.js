import {postUrl} from '../../api';
import {getPostsArrayShortenAndTransformed} from '../../utils'

const postRequest = () => {
    return {
        type: "POST_REQUEST"
    }
}
const catchErrorAction = (data) => {
    return {
        type: "POST_ERROR_REGISTRATION",
        payload: data
    }
}
const fetchPosts = (data) => {
    return {
        type: "FETCH_POSTS",
        payload: data
    }
}
const updatePost = (id) => {
    return {
        type: "UPDATE_POST",
        payload: id
    }
}

export const getPostsFromJP = (postAmount, articlesArr) => async dispatch => {
    dispatch(postRequest());
    try {
        const gotPosts = await postUrl.get();
        const postsArrayShortenAndTransformed = getPostsArrayShortenAndTransformed(gotPosts.data, postAmount, articlesArr);
        const objToDespatch = {
            postsArrayShortenAndTransformed,
            postAmount
        }
        dispatch(fetchPosts(objToDespatch));
    } catch (error) {
        dispatch(catchErrorAction(error.message))
    }
}

export const changeBtnStatuses =(id) => () => async(dispatch) => {
    dispatch(updatePost(id))
}