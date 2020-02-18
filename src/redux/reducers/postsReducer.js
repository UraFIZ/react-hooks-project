
import {formNewState, getUpdatePostItem} from '../../utils'
const initialState = {
    blanks: [],
    amount: null
}

const PostReducers = (state = initialState, {type, payload}) => {
        switch(type) {
            case "FETCH_POSTS":
                return formNewState(state, payload)
            case "UPDATE_POST":
                return getUpdatePostItem(state, payload)
            default:
                return state
        }
}

export default PostReducers