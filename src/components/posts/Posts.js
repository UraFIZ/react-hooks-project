import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post';
import ErrorIndicator from '../../containers/error-indicator';
import Spinner from '../../containers/spinner';

function Posts() {
    const posts = useSelector(state => state.posts.blanks);
    const isLoading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error);

    const hasData = !(isLoading || error);
    const errorMessage = error ? <ErrorIndicator error={error}/> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = hasData ? posts.map((item) => <Post key={item.id} id={item.id} title={item.title} body={item.body} isUsed={item.isUsed} />) : null;
    return (
        <div className="posts-wrapper">
            <h3 className="posts-title">Posts</h3>
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

export default Posts

