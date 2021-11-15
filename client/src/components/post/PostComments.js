import React from 'react';
import styled from 'styled-components';
import Input from '../auth/Input';
import Button from '../common/Button';

const PostCommentsBlock = styled.div`
    margin-bottom: 2rem;
    form {
        display: flex;
        margin-bottom: 1rem;
    }
    .comments-list {
        li {
            margin-bottom: 1rem;
        }
    }
`;

const CommentButton = styled(Button)`
    flex-shrink: 0;
`;


const PostComments = () => {
    return (
        <PostCommentsBlock>
            <form>
                <Input 
                type="text"
                placeholder="댓글을 입력해주세요." 
                name="comment"
                value=""
                />
                <CommentButton>등록</CommentButton>
            </form>
            <ul className="comments-list">
                <li>
                    <span>zzang </span>
                    <span>2021.11.20</span>
                    <p>입력한 댓글 표시</p>
                </li>
                <li>
                    <span>juhee </span>
                    <span>2021.11.20</span>
                    <p>입력한 댓글 표시</p>
                </li>
            </ul>
        </PostCommentsBlock>
    );
};

export default PostComments;