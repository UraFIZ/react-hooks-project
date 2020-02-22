export const formNewArticleState = (state, obj) => {
    const { articles } = state;
    const newArticles = articles.slice(0, 0);
    return {
        ...state, articles: [...newArticles, ...obj], loading: false
    };
}
const findPickedStateObj = (state, id) => {
    const objInx = state.findIndex(item => item.id === id);
    const currentArticle = state.find(item => item.id === id);
    return {
        objInx,
        currentArticle
    }
}
export const removeArticleFromState = (state, id) => {
    const { articles } = state;
    const { objInx, currentArticle } = findPickedStateObj(articles, id);
    const newArticles = [
        ...articles.slice(0, objInx),
        ...articles.slice(objInx+1)
    ]
    return {
        ...state, articles: [...newArticles]
    }
}