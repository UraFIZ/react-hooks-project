import {postUrl} from '../../api';
import {getPostsArrayShortenAndTransformed} from '../../utils'


const fetchPosts = (data) => {
    return {
        type: "FETCH_POSTS",
        payload: data
    }
}
const deletePostAction = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}
export const getPostsFromJP = (postAmount) => async dispatch => {
    const gotPosts = await postUrl.get();
    const postsArrayShortenAndTransformed = getPostsArrayShortenAndTransformed(gotPosts.data,postAmount);
    dispatch(fetchPosts(postsArrayShortenAndTransformed));

}

export const deletePost = (id) => () => async (dispatch) => {
       dispatch(deletePostAction(id))
}