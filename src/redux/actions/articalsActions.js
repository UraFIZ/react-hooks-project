import {baseURL} from '../../api';


const addArticle =(data) => {
    return {
        type: "ADD_ARTICLE_FIRST-STEP",
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
const catchErrorAction = (data) => {
    return {
        type: "ERROR_REGISTRATION",
        payload: data
    }
}
export const addArticlesStep1 = formValues => async dispatch => {
    // baseURL.post('/articles', formValues)
    dispatch(addArticle(formValues))
}
export const addArticlesStep2 = formValues => async dispatch => {
    // baseURL.post('/articles', formValues)
    dispatch(addArticleStepTwo(formValues))
}
export const initArticlesPageWhileReloading = () => async dispatch => {
    const articles = await baseURL.get("/articles");
    if(articles.statusText !== "OK") {
        dispatch(catchErrorAction(articles.articles));
    }else{
        dispatch(initiateArticles(articles.data));
    }

}
export const deleteArticle = (id) => () => async dispatch => {
    baseURL.delete(`/articles/${id}`);
    dispatch(deleteArticleAction(id))
}