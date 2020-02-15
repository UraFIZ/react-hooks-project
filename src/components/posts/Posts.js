import React from 'react'
import Post from '../post'
import {useSelector} from 'react-redux'



 function Posts() {
    const posts = useSelector(state => state.posts)
          
    return (
        <div className="posts-wrapper">
            {
            posts.map((item) => <Post key={item.id} id={item.id} title={item.title} body={item.body} isUsed={item.isUsed} /> )
            }

        </div>
      
    )
}


export default Posts
