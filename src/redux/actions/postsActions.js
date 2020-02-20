import {postUrl} from '../../api';
import {getPostsArrayShortenAndTransformed} from '../../utils'

const postRequest = () => {
    return {
        type: "POST_REQUEST"
    }
}
export const stepFormRequest = () => {
    return {
        type: "STEP_FORM_REQUEST"
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
export const fetchDataFOrStepForm = () => {
    return {
        type: 'FETCHING_DATA_FOR_STEP_FORM'
    }
}
const updatePost = (id) => {
    return {
        type: "UPDATE_POST",
        payload: id
    }
}
export const catchStepFormError = (data) => {
    return {
        type: "STEP_FORM_ERROR_REGISTRATION",
        payload: data
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