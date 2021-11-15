import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import PostList from '../components/main/PostList';
import TagCategory from '../components/main/TagCategory';

const MainpageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
`;

const MainPage = () => {
    return (
        <>
            <Nav/>
            <MainpageBlock>
                <TagCategory/>
                <PostList/>
            </MainpageBlock>
            <Footer/>
        </>
    );
};

export default MainPage;