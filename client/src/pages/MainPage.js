import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    // const dispatch = useDispatch();
    
    //useSelector로 posts 데이터와 user 데이터 받아오기
    // const { posts, error, loading, user } = useSelector(({ posts, users }) => ({
    //     posts: posts.posts,
    //     error: posts.error,
    //     loading: posts.loading,
    //      user: users.user,
    // }));

    /*
    location.search에 쿼리 확인 가능 
    useEffect(() => {
        const { hashtag } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(getPosts());
    },[dispatch, location.search]);
    */

    return (
        <>
            <Nav/>
            <MainpageBlock>
                <TagCategory/>
                <PostList
                // loading={loading}
                // error={error}
                // posts={posts}
                />
            </MainpageBlock>
            <Footer/>
        </>
    );
};

export default MainPage;