import React from 'react'
import Logo from '../../containers/logo'
import Posts from '../../components/posts'
import SelectPosts from '../../components/select-posts'
const MainPage = () => {
    return (
        <>
            <Logo />
            <SelectPosts />
            <Posts />
        </>
    )
}

export default MainPage
