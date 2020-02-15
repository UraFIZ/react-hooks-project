import React from 'react'
import {useSelector} from 'react-redux'
import Post from '../post'



 function Posts() {

    const posts = useSelector(state => state.posts);
        
    return (

        <div className="posts-wrapper">
            {
              posts.map((item) => <Post key={item.id} id={item.id} title={item.title} body={item.body}  /> )
            }

        </div>
      
    )
}


export default Posts
