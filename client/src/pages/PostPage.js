import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import PostComments from '../components/post/PostComments';
import PostContents from '../components/post/PostContents';

const PostPageBlock = styled.div`
    width: 30%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
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
    return (
        <PostPageBlock>
            <div>
                <h1>title</h1>
                <span>2021.11.20</span>
            </div>
            <PostContents/>
            <PostComments/>
            <div className="move-btn">
                <Button>메인 화면으로 이동</Button>
            </div>
        </PostPageBlock>
    );
};

export default PostPage;