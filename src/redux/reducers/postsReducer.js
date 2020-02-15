
import {getDeletedPostItem, formNewState} from '../../utils'


const PostReducers = (state = [], {type, payload}) => {
        switch(type) {
            case "DELETE_POST":
                return getDeletedPostItem(state, payload)
            case "FETCH_POSTS":
                return formNewState(state, payload)
            default:
                return state
        }
}

export default PostReducers