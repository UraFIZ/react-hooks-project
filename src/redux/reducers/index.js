import { combineReducers } from 'redux'
import articles from './articlesReducers';
import posts from './postsReducer';

export default combineReducers({
    articles,
    posts
})



