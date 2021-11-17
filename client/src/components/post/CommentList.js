import React from 'react';
import styled from 'styled-components';

const CommentListBlock = styled.div`
    li {
        margin-bottom: 0.7rem;
        p {
            margin-top: 0.3rem;
        }
    }
`;

const CommentList = ({ comments }) => {
    //const { comment_content, create_at , username } = comments;

    return (
        <CommentListBlock>
            {/* 
                {comments.map((comment, idx) => {
                    const { comment_content, create_at , username } = comments;
                    return (
                    <li>
                        <span>{username}</span>
                        <span>{create_at}</span>
                        <p>{comment_content}</p>
                    </li>
                )})}
            */}
           <li>
                <span>zzang </span>
                <span>2021.11.20</span>
                <p>입력한 댓글 표시</p>
            </li> 
        </CommentListBlock>
    );
};

export default CommentList;