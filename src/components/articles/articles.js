import React,  {useEffect}  from 'react'
import Article from '../article'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {useSelector} from "react-redux"
import {initArticlesPageWhileReloading} from '../../redux/actions/articalsActions'
import ErrorBounders from '../../components/error-boundry'
import {baseURL} from '../../api';

const Articles = ({initArticlesPageWhileReloading}) => {
    const articles = useSelector(state => state.articles.articles);
    useEffect(()=> {
        baseURL.get("/articles").then(data => {
            if(data.data.length > 0 && articles.length < 1) {
                initArticlesPageWhileReloading();
            }
        })
    }, [])
    return (
        <div className="articles-wrapper">
         <h3 className="articles-title">Articles</h3>
            {
              articles.map(item => (
                  <ErrorBounders key={item.id} debug={true}>
                   <Article key={item.id} title={item.title} subtitle={item.subtitle} photo={item.currentPhoto} body={item.body} id={item.id} date={item.date} email={item.email} isAllowedAd={item.active}/>
                  </ErrorBounders>
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
