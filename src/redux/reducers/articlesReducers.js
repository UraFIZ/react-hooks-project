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
        case "ADD_ARTICLE_FIRST-STEP": 
        return {
            ...state, articles: [...state.articles, payload]
        }
        // eslint-disable-next-line no-duplicate-case
        case "ADD_ARTICLE_SECOND-STEP": 
             return addedInfoTOFirstStep(state, payload)
        case "DELETE_ARTICLE":
            return removeArticleFromState(state, payload)
        default:
            return state
    }
}
export default ArticlesReducer