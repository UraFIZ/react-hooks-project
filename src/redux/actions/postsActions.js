import {postUrl} from '../../api';
import {getPostsArrayShortenAndTransformed} from '../../utils'


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
const deletePostAction = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}
export const getPostsFromJP = (postAmount, articlesArr) => async dispatch => {
    const gotPosts = await postUrl.get();
    const postsArrayShortenAndTransformed = getPostsArrayShortenAndTransformed(gotPosts.data,postAmount, articlesArr);
    dispatch(fetchPosts(postsArrayShortenAndTransformed));
}

export const deletePost = (id) => () => async (dispatch) => {
       dispatch(deletePostAction(id))
}
export const changeBtnStatuses =(id) => () => async(dispatch) => {
    dispatch(updatePost(id))
}