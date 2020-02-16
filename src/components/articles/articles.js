import React,  {useEffect}  from 'react'
import Article from '../article'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {useDispatch, useSelector} from "react-redux"
import {initArticlesPageWhileReloading} from '../../redux/actions/articalsActions'

const Articles = ({initArticlesPageWhileReloading}) => {
    const articles = useSelector(state => state.articles);

    useEffect(()=> {
        if(articles.length < 1) {
            initArticlesPageWhileReloading();
        }
    }, [])
    return (
        <div className="articles-wrapper">
            {
              articles.map(item => (
                   <Article key={item.id} title={item.title} subtitle={item.subtitle} photo={item.currentPhoto} body={item.body} id={item.id} date={item.date} isAllowedAd={item.active}/>
              ))
            }
            
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initArticlesPageWhileReloading: initArticlesPageWhileReloading
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Articles)
