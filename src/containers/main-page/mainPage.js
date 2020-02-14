import React from 'react'
import Logo from '../../containers/logo'
import Posts from '../../components/posts'
import SelectPosts from '../../components/select-posts'
import Articles from '../../components/articles'
const MainPage = () => {
    return (
        <>
            <Logo />
            <SelectPosts />
            <div className="content-wrapper">
            <Posts />
            <Articles />
            </div>
           
        </>
    )
}

export default MainPage
