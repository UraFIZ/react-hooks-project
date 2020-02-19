
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
                     ...state, loading: true
                 }
            case "POST_ERROR_REGISTRATION": 
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