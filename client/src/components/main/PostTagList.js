import React from 'react';
import styled from 'styled-components';

const PostTagListBlock = styled.ul`
    button {
        font-size: 1rem;
        color: #b3b3b3;
        border: 1px solid #e8e5e5;
        border-radius: 20px;
        padding: 0.3rem 0.8rem;
        margin-right: 0.5rem;
   }
`;

const PostTagList = () => {
    return (
        <PostTagListBlock>
            <li>
                <button>#뻔뻔</button>
                <button>#멋짐</button>
            </li>
        </PostTagListBlock>
    );
};

export default PostTagList;