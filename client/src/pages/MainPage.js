import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import PostList from '../components/main/PostList';
import TagCategory from '../components/main/TagCategory';
import { getPosts } from '../lib/api';

const MainpageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
`;

const MainPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { posts, error, loading } = useSelector(({ posts }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: posts.loading,
    }));

    //location.search의 문자값 추출하기
    // useEffect(() => {
    //     const { hashtag } = qs.parse(location.search, { //일상
    //         ignoreQueryPrefix: true,
    //     });
    //     dispatch(getPosts(hashtag));
    // },[dispatch, location.search]);

    return (
        <>
            <Nav/>
            <MainpageBlock>
                <TagCategory/>
                <PostList
                loading={loading}
                error={error}
                posts={posts}
                />
            </MainpageBlock>
            <Footer/>
        </>
    );
};

export default MainPage;