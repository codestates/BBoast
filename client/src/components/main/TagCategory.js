import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../style/palette';

const TagListBlock = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 80px;
   gap: 1rem;
`;

const TagCategoryStyle = styled(Link)`
    font-size: 1rem;
    color: ${palette.gray[4]};
    border: 1px solid ${palette.gray[3]};
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
    text-decoration: none;
    &:focus {
        color: ${palette.orange[2]};
        border: 1px solid ${palette.orange[2]};
    }
`;

const categories = ['일상', '멋짐', '사소', '플렉스', '뻔뻔'];
const TagCategory = () => {
    //카테고리 클릭하면 카테고리와 일치하는 글 목록 불러오기
    return (
        <TagListBlock>
              {
                categories.map((category, idx) => (
                   <TagCategoryStyle
                   key={idx}
                   to={`/main?hashtag=${category}`}
                   > 
                   #{category}
                   </TagCategoryStyle>
                )) 
              }  
        </TagListBlock>
    );
};

export default TagCategory;