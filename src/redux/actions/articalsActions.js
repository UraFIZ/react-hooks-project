import {baseURL, postUrl} from '../../api';

export const addArticles = formValues => async dispatch => {
    baseURL.post('/articles', formValues)
}