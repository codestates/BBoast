import React from 'react';
import styled from 'styled-components';
import PostList from '../components/main/PostList';
import TagCategory from '../components/main/TagCategory';

const MainpageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
`;

const MainPage = () => {
    return (
        <MainpageBlock>
            <TagCategory/>
            <PostList/>
        </MainpageBlock>
    );
};

export default MainPage;