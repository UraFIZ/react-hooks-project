import {baseURL, postUrl} from '../../api';


const addArticle =(data) => {
    return {
        type: "ADD_ARTICLE_FIRST-STEP",
        payload: data
    }
}
const initiateArticles = (data) => {
    return {
        type: "INITIATE_ARTICLES",
        payload: data
    }
}
export const addArticlesStep1 = formValues => async dispatch => {
    // baseURL.post('/articles', formValues)
    dispatch(addArticle(formValues))
}
export const addArticlesStep2 = formValues => async dispatch => {
    // baseURL.post('/articles', formValues)
    dispatch({
        type: "ADD_ARTICLE_SECOND-STEP",
        payload: formValues
    })
}
export const initArticlesPageWhileReloading = () => async dispatch => {
    const articles = await baseURL.get("/articles");
    console.log("articles from db in initAC", articles.data);
    dispatch(initiateArticles(articles.data));

}