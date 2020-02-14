const initialState = {
    id: null,
    title: "",
    text: "",
    photo: "",
    active: true,
    data: ""
}

 const ArticlesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ARTICLES": 
        return {
            ...state, ...action.payload
        }
        default:
            return state
    }
}
export default ArticlesReducer