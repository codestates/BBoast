import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from '../auth/Input';
import Button from '../common/Button';
import CommentList from './CommentList';

const PostCommentsBlock = styled.div`
    margin-bottom: 2rem;
    form {
        display: flex;
        margin-bottom: 1rem;
    }
`;

const CommentButton = styled(Button)`
    flex-shrink: 0;
`;


const PostComments = ({ postId, comments, user, changeInput }) => {
    // const dispatch = useDispatch();

    //댓글 입력하기
    // const onChange = (e) => {
    //     changeInput(e.target.value);
    // }
    
    //댓글 전송하기
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(writeComment(user, postId, comments.input))
    //     changeInput('');
    // };

    return (
        <PostCommentsBlock>
            <form 
            // onSubmit={onSubmit}
            >
                <Input 
                type="text"
                placeholder="댓글을 입력해주세요." 
                name="comment"
                // onChange={onChange}
                />
                <CommentButton>등록</CommentButton>
            </form>
            <CommentList
            //comments={comments}
            //user={user}
            />
        </PostCommentsBlock>
    );
};

export default PostComments;