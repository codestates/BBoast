import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import PostComments from '../components/post/PostComments';
import PostContents from '../components/post/PostContents';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';

const PostPageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem 4rem;
    margin-top: 2rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 2rem;
    }
    span {
        color: #b3b3b3;
    }
    .move-btn {
        display: flex;
        justify-content: flex-end;
    }
`;


const PostPage = () => {
    /*
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post, error, loading, comments, user } = useSelector(({ post, error, loading, comment }) => ({
        post: post.post,
        error: post.error,
        loading: post.loading,
        comments: comments.comments,
        user: user.user
    }));

    useEffect(() => {
        dispatch(viewPost(id));
        return () => {
            dispatch(initializeViewPost());
        }
    },[dispatch, id]);

    if(!post){
        return <PostPageBlock>존재하지 않는 글입니다.</PostPageBlock>;
    }
    if(error){
        return <PostPageBlock>에러가 발생했습니다.</PostPageBlock>;
    }
    if(loading){
        return <PostPageBlock>로딩중...</PostPageBlock>;
    }

    const { id, post_title, post_content, post_image, created_at, hashtags} = post
    */

    return (
        <>
            <Nav/>
            <PostPageBlock>
                <div>
                    <h1>title</h1>
                    <span>2021.11.20</span>
                </div>
                <PostContents
                //post={post}
                />
                <PostComments
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