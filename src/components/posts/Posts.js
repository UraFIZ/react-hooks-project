import React from 'react'
import Post from '../post'
import { useSelector } from 'react-redux'



function Posts() {
    const posts = useSelector(state => state.posts.blanks)
    const isLoading = useSelector(state => state.posts.loading);

    return (

        <div className="posts-wrapper">
            <h3 className="posts-title">Posts</h3>
            {
                !isLoading ?
                    posts.map((item) => <Post key={item.id} id={item.id} title={item.title} body={item.body} isUsed={item.isUsed} />)
                    : <div className="loader loader--small"></div>
            }

        </div>


    )
}


export default Posts
