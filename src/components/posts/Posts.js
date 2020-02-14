import React, {useEffect} from 'react'
import { bindActionCreators } from 'redux'
import {connect, useSelector} from 'react-redux'
import {addArticles} from '../../redux/actions/articalsActions'
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
const mapDispatchToProps = (dispatch, state) => {
    return bindActionCreators({
        addArticles: addArticles,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Posts)
