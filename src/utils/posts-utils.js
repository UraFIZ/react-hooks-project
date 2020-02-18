export const getPostsArrayShortenAndTransformed = (arr, number, articleArr) => {
    let currentPostArr;
    if (number === 5) {
        currentPostArr = arr.slice(0, number);
    } else if (number === 10) {
        currentPostArr = arr.slice(5, number);
    } else {
        currentPostArr = arr.slice(10, number);
    }
    const transformedPostArr = checkIfPostDisabledToWriteArticle(addPostObjBoolProperty(currentPostArr), articleArr);
    return transformedPostArr;

}
const checkIfPostDisabledToWriteArticle = (posts, articles) => {
    if (articles.length > 0) {
        return posts.map((item, inx) => {
            const data = articles.find((articlesItem) => {
                if (item.id == articlesItem.id) {
                    return item
                }
            })
            if (data != undefined) {
                if (item.id == data.id) {
                    return { ...item, isUsed: true }
                } else {
                    return item
                }
            } else {
                return item
            }
        })
    } else {
        return posts
    }
}
const addPostObjBoolProperty = (objArr) => {
    return objArr.map(item => Object.assign({}, item, { isUsed: false }))
}

export const formNewState = (state, data) => {
    const { blanks = [] } = state;
    const { postsArrayShortenAndTransformed, postAmount } = data;
    const newState = blanks.slice(0, 0);
    return { ...state, loading: false, blanks: [...newState, ...postsArrayShortenAndTransformed], amount: postAmount };
}
export const getUpdatePostItem = (state, id) => {
    const { blanks } = state;
    const currentInx = blanks.findIndex(item => item.id == id);
    // const currentObj = blanks.find(item => item.id == id);
    const currentObj = blanks[currentInx]
    const value = !currentObj["isUsed"];
    // let opositIsUsedValue = currentObj
    const updatedArr = [
        ...blanks.slice(0, currentInx),
        { ...currentObj, isUsed: value },
        ...blanks.slice(currentInx + 1)
    ]
    return {
        ...state, blanks: [...updatedArr]
    }
}