import React from 'react';
import PropTypes from 'prop-types'; 
import { useForm } from 'react-hook-form';
import {useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getPostsFromJP} from '../../redux/actions/postsActions';


 const SelectPosts = ({getPostsFromJP}) => {
    const { register, handleSubmit } = useForm();
    const articles = useSelector(state => state.articles.articles);

    const onSubmit = data => {
        getPostsFromJP(+data.quantity, articles)
    }
    let selected = useSelector(state => state.posts.amount);
    
    return (
        <div className="container"> 
            <h3 className="heading-secondary">Select an amount of posts to write an amazing article</h3>
            <form className="form-select" onSubmit={handleSubmit(onSubmit)}>
                <select defaultValue={selected} className="post-form post-form-select" name="quantity" ref={register}>
                    <option value="5">0-5</option>
                    <option value="10">5-10</option>
                    <option value="15">10-15</option>
                </select>
                <input className="post-form post-form-submit-btn" type="submit" />
            </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsFromJP: getPostsFromJP,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectPosts);

SelectPosts.propTypes = {
    getPostsFromJP: PropTypes.func,
}