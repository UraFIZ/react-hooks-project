import axios from 'axios';

export const baseURL = axios.create({
    baseURL: " http://localhost:3001"
})
export const postUrl = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
export const photoUrl = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/photos",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})