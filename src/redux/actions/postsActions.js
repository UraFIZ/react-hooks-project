import {postUrl, photoUrl} from '../../api';
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

export  const getInitialDataForForm = (id) => () => async (dispatch) => {
    try {
      dispatch(stepFormRequest())
      const currentPost = await postUrl.get(`/${id}`);
      const photosArr = await photoUrl.get(`?albumId=${id}`);
      const photos = photosArr.data.slice(0, 10).map(item => {
        return {
          url: item.url,
          id: item.id,
          photoTitle: item.title
        }
      })
      dispatch(fetchDataFOrStepForm());
      const {title, body} = currentPost.data;
      return {
        photos,
        title,
        body
      }
    } catch (error) {
      dispatch(catchStepFormError(error.message))
    }

  }