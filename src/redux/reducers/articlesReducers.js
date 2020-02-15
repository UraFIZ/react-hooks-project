import {addedInfoTOFirstStep, formNewArticleState} from '../../utils'

 const ArticlesReducer = (state = [], {type, payload}) => {
    switch(type) {
        case "INITIATE_ARTICLES":
        return formNewArticleState(state, payload)
        case "ADD_ARTICLE_FIRST-STEP": 
        return [
            ...state, payload
        ]
        // eslint-disable-next-line no-duplicate-case
        case "ADD_ARTICLE_SECOND-STEP": 
             return addedInfoTOFirstStep(state, payload)
        default:
            return state
    }
}
export default ArticlesReducer