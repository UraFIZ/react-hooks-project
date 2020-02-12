const initialState = {
    id: null,
    title: "",
    text: "",
    photo: "",
    active: true,
    data: ""
}

export default function (state = initialState, action) {
    switch(action.type) {
        case "ADD_ARTICLES": 
        return {
            ...state, ...action.payload
        }
        default:
            return state
    }
}