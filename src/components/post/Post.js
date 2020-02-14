import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { deletePost } from '../../redux/actions/postsActions'

 const Post = ({title, body, id, deletePost}) => {
console.log(deletePost)
    return (
        <div className="post">
            <div className="post_content">
            <div className="post_title">{title}</div>
            <div className="post_body">{body}</div>
            </div>
            <div className="post_btns">
                <button onClick={deletePost}  className="post_btn post_btn--red">Delete</button>
                <button className="post_btn post_btn--green">Create article</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators({
        deletePost: deletePost(props.id)
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Post)
