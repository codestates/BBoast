import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 2rem;
`;

const PostList = () => {
    return (
        <PostListBlock>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </PostListBlock>
    );
};

export default PostList;