import {baseURL} from '../../api';


const addArticle =(data) => {
    return {
        type: "ADD_ARTICLE",
        payload: data
    }
}
const addArticleStepTwo =(data) => {
    return {
        type: "ADD_ARTICLE_SECOND-STEP",
        payload: data
    }
}
const initiateArticles = (data) => {
    return {
        type: "INITIATE_ARTICLES",
        payload: data
    }
}
const deleteArticleAction = (id) => {
    return {
        type: "DELETE_ARTICLE",
        payload: id
    }
}
export const catchErrorAction = (data) => {
    return {
        type: "ARTICLE_ERROR_REGISTRATION",
        payload: data
    }
}
export const addArticleFromForm = formValues => async dispatch => {
    dispatch(addArticle(formValues))
}
export const addArticlesStep2 = formValues => async dispatch => {
    // baseURL.post('/articles', formValues)
    dispatch(addArticleStepTwo(formValues))
}
export const initArticlesPageWhileReloading = () => async dispatch => {
    try {
        const articles = await baseURL.get("/articles");
        dispatch(initiateArticles(articles.data));
    } catch (error) {
        dispatch(catchErrorAction(error.message)); 
    }
}
export const deleteArticle = (id) => () => async dispatch => {
    baseURL.delete(`/articles/${id}`);
    dispatch(deleteArticleAction(id))
}