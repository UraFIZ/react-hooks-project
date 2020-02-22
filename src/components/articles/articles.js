import React,  {useEffect}  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'; 
import {useSelector, useDispatch} from "react-redux";
import Article from '../article';
import {initArticlesPageWhileReloading, catchErrorAction} from '../../redux/actions/articalsActions';
import ErrorBounders from '../../components/error-boundry';
import {baseURL} from '../../api';
import ErrorIndicator from '../../containers/error-indicator';

const Articles = ({initArticlesPageWhileReloading}) => {
    const articles = useSelector(state => state.articles.articles);
    const error = useSelector(state => state.articles.error);
    const dispatch = useDispatch();

    useEffect(()=> {
        baseURL.get("/articles").then(data => {
            if(data.data.length > 0 && articles.length < 1) {
                initArticlesPageWhileReloading();
            }
        }).catch(error => dispatch(catchErrorAction(error.message)))
    }, [])

    const hasData = !error;
    const errorMessage = error ? <ErrorIndicator error={error}/> : null;
    const content = hasData ? articles.map(item => (
        <ErrorBounders key={item.id} debug={true}>
         <Article key={item.id} title={item.title} subtitle={item.subtitle} photo={item.currentPhoto} body={item.body} id={item.id} date={item.date} email={item.email} isAllowedAd={item.active}/>
        </ErrorBounders>
    )): null;
    
    return (
        <div className="articles-wrapper">
         <h3 className="articles-title">Articles</h3>
            {errorMessage}
            {content}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initArticlesPageWhileReloading: initArticlesPageWhileReloading
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Articles)

Article.propTypes = {
    initArticlesPageWhileReloading: PropTypes.func
}
