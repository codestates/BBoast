import React from 'react';
import styled from 'styled-components';

const TagListBlock = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 80px;
   gap: 1rem;
   button {
       font-size: 1rem;
       color: #b3b3b3;
       border: 1px solid #e8e5e5;
       border-radius: 20px;
       padding: 0.3rem 0.8rem;
       &:focus {
           color: violet;
           border: 1px solid violet;
       }
   }
`;

const TagCategory = () => {
    return (
        <TagListBlock>
                <li>
                    <button>#일상</button>
                </li>
                <li>
                    <button>#멋짐</button>
                </li>
                <li>
                    <button>#사소</button>
                </li>
                <li>
                    <button>#플렉스</button>
                </li>
                <li>
                    <button>#뻔뻔</button>
                </li>
        </TagListBlock>
    );
};

export default TagCategory;