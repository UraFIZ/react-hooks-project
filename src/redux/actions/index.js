import articles from '../../api/article';

export const addArticles = formValues => async dispatch => {
    articles.post('/articles', formValues)
}