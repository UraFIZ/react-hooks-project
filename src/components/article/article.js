import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {useSelector} from "react-redux"
import { deleteArticle } from '../../redux/actions/articalsActions'
import {changeBtnStatuses} from '../../redux/actions/postsActions'
const Article = ({title, subtitle, body, photo, id, date, email, isAllowedAd, deleteArticle, changeBtnStatuses}) => {
    const deleteArticleAndRefrash =()=> {
        deleteArticle();
        if(posts.length > 0) {
            changeBtnStatuses()
        }
    }
    const posts = useSelector((state) => state.posts);
    return (
        <article id={id} className="article">
            <div style={{display: isAllowedAd ? "flex" : "none"}} className="article_banner">You are the best article creater. Become event better going to this link</div>
            <div className="article_delete-wrapper">
                <div className="article-date">{date}</div>
                <span onClick={deleteArticleAndRefrash} className="article_delete">X</span>   
            </div>
            <div className="article_wrapper">
               <div className="article_photo-wrapper">
                    <img className="article_img" src={photo.url} alt={photo.photoTitle}></img>
                </div>
                <div className="article_title-wrapper">
                     <div className="article_title">{title}</div>
                     <div className="article_subtitle">{subtitle}</div>
                </div>
                <div className="article_content-wrapper">
                     <div className="article_body">{body}</div>
                </div>
             </div>
             <div className="article_footer">Get in touch to the creator &nbsp;&nbsp; <a href={`mailto:${email}`}>{email}</a> </div>
        </article>
    )
}
const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators({
        deleteArticle: deleteArticle(props.id),
        changeBtnStatuses: changeBtnStatuses(props.id)
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Article)
