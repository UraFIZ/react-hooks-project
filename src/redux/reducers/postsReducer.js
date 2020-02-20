
import {formNewState, getUpdatePostItem} from '../../utils'
const initialState = {
    blanks: [],
    amount: null,
    loading: false,
    error: ''
}

const PostReducers = (state = initialState, {type, payload}) => {
        switch(type) {
            case "POST_REQUEST": 
                 return {
                     ...state, error: '', loading: true
                 }
            case "STEP_FORM_REQUEST": 
                 return {
                     ...state, error: '', loading: true
                 }
            case "FETCHING_DATA_FOR_STEP_FORM":
                return {
                    ...state, error: '', loading: false
                }
            case "POST_ERROR_REGISTRATION": 
                return {
                    ...state, error: payload, loading: false
                }
            case "STEP_FORM_ERROR_REGISTRATION": 
                return {
                    ...state, error: payload, loading: false
             }   
            case "FETCH_POSTS":
                return formNewState(state, payload)
            case "UPDATE_POST":
                return getUpdatePostItem(state, payload)
            default:
                return state
        }
}

export default PostReducers