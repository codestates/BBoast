import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 2rem;
`;

const PostList = ({ posts, loading, error }) => {
    // if(loading){
    //     return <PostListBlock>로딩중...</PostListBlock>
    // }
    // if(!posts){
    //     return <PostListBlock>글 목록이 없습니다.</PostListBlock>
    // }
    // if(error){
    //     return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    // }
    return (
        <PostListBlock>
            
                {/* {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))} */}
           
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