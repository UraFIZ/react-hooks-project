import React from 'react'
import { useForm } from 'react-hook-form'
import {useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {getPostsFromJP} from '../../redux/actions/postsActions'


 const SelectPosts = ({getPostsFromJP}) => {
    const { register, handleSubmit } = useForm()
    const articles = useSelector(state => state.articles);

    const onSubmit = data => {
        localStorage.removeItem("select");
        localStorage.setItem("select",JSON.stringify(+data.quantity));
        getPostsFromJP(+data.quantity, articles)
    }

    return (
        <div>
            <h2>Select an amount of posts to write an amazing article</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="quantity" ref={register}>
                    <option value="5">0-5</option>
                    <option value="10">5-10</option>
                    <option value="15">10-15</option>
                </select>
                <input type="submit" />
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