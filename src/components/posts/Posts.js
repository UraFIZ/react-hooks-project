import React, {useEffect} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {addArticles} from '../../redux/actions'
import Post from '../post'

 function Posts(props) {
    // useEffect(()=> {
    //    props.addArticles({
    //     id: 4,
    //     title: "dfasd",
    //     text: "addsf",
    //     photo: "adfad",
    //     active: true,
    //     data: "dfadf"
    //    })
    // }, [])
    return (
      <Post title="Hro" body="hro hro" />
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addArticles: addArticles
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Posts)
