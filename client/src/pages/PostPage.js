import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/common/Button';
import PostComments from '../components/post/PostComments';
import PostContents from '../components/post/PostContents';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import { viewPost, initializeViewPost } from '../reducer/postReducer';
import palette from '../style/palette';

const PostPageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem 4rem;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    h1 {
        font-size: 2rem;
    }
    span {
        color: ${palette.gray[4]};
    }
    .move-btn {
        display: flex;
        justify-content: flex-end;
    }
`;


const PostPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, error, loading, comments, comment_content } = useSelector(({ post, error, loading, comment, cool }) => ({
        post: post.post,
        error: post.error,
        loading: post.loading,
        comments: comment.comments,
        comment_content: comment.comment_content
        // coolBtn : 
    }));

    // 쿨버튼 클릭
    // const onClickCoolBtn = (포스트 아이디, 유저 아이디) => {
    //     dispatch(clickCoolBtn(포스트 아이디, 유저 아이디));
    // }

    // useEffect(() => {
    //     dispatch(viewPost(id));
    //     return () => {
    //         dispatch(initializeViewPost());
    //     }
    // },[dispatch, id]);
    // if(loading){
    //     return (
    //         <>
    //             <Nav/>
    //             <PostPageBlock>로딩중...</PostPageBlock>;
    //             <Footer/>
    //         </>
    //     )
    // }
    // if(!post){
    //     return (
    //         <>
    //             <Nav/>
    //             <PostPageBlock>존재하지 않는 글입니다.</PostPageBlock>;
    //             <Footer/>
    //         </>
    //     )
    // }
    // if(error){
    //     return (
    //         <>
    //             <Nav/>
    //             <PostPageBlock>에러가 발생했습니다.</PostPageBlock>;
    //             <Footer/>
    //         </>
    //     )
    // }

    // const { id, post_title, post_content, post_image, created_at, hashtags} = post

    //현재 날짜
    const date = new Date().toLocaleDateString('ko-KR');
    const today = date.slice(0, date.length - 1)
    
    return (
        <>
            <Nav/>
            <PostPageBlock>
                <div>
                    <h1>title</h1>
                    <span>{today}</span>
                </div>
                <PostContents
                //post={post}
                //onClickCoolBtn={onClickCoolBtn}
                />
                <PostComments
                //comment_content={comment_content}
                //comments={comments}
                //postId={id}
                //user={user}
                //changeInput={changeInput}
                />
                <div className="move-btn">
                    <Link to="/main">
                        <Button>메인 화면으로 이동</Button>
                    </Link>
                </div>
            </PostPageBlock>
            <Footer/>
        </>
    );
};

export default PostPage;