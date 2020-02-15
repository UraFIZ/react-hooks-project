import _ from 'lodash';

export const getPostsArrayShortenAndTransformed = (arr, number) => {
    let currentPostArr;
    if(number === 5) {
        currentPostArr = arr.slice(0, number);
    }else if(number === 10) {
        currentPostArr = arr.slice(5, number);
    }else {
        currentPostArr = arr.slice(10, number);
    }
    const transformedPostArr = addPostObjBoolProperty(currentPostArr);
    return transformedPostArr;

}

const addPostObjBoolProperty = (objArr) => {
    return objArr.map(item => Object.assign({}, item, {isUsed: false}))
}


export const getDeletedPostItem = (arr, id) => {
    return arr.filter(item => item.id !== id);

}
export const formNewState =(state, arr) => {
  const newState = state.slice(0,0);
  return [...newState, ...arr];
}
export const formNewArticleState =(state, arr) => {
  const newState = state.slice(0,0);
  return [...newState, ...arr];
}
export const addedInfoTOFirstStep = (state, data) => {
const objInx = state.findIndex(item => item.id === data.id);
const currentArticle = state.find(item => item.id === data.id);
const newArticle = {...currentArticle, ...data}
    return [
        ...state.slice(0, objInx),
        newArticle,
        ...state.slice(objInx+1)
    ]
}