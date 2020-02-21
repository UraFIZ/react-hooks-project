import {addedInfoTOFirstStep, formNewArticleState, removeArticleFromState} from '../../utils'
const initialState = {
    articles: [],
    loading: false,
    error: ""
}
 const ArticlesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "INITIATE_ARTICLES":
        return formNewArticleState(state, payload)
        case "ARTICLE_ERROR_REGISTRATION": 
        return {
            ...state, error: payload, loading: false
        }
        case "ADD_ARTICLE": 
        return {
            ...state, articles: [...state.articles, payload]
        }
        case "DELETE_ARTICLE":
            return removeArticleFromState(state, payload)
        default:
            return state
    }
}
export default ArticlesReducer