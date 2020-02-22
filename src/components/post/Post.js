import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Post = ({ title, body, id, isUsed }) => {
    const { push } = useHistory();
    const onCreateArticle = () => {
        push(`/step/${id}`);
    }
    return (
        <div className="post">
            <div className="post_title">{title}</div>
            <div className="post-wrapper">
                <div className="post_content">
                    <div className="post_body">{body}</div>
                </div>
                <div className="post_btns">
                    <button onClick={onCreateArticle} className="post_btn post_btn--create" disabled={isUsed} >Create article</button>
                </div>
            </div>
        </div>
    )
}
export default Post

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isUsed: PropTypes.bool.isRequired
}
