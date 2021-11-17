import React from 'react';
import styled from 'styled-components';
import palette from '../../style/palette';

const TagBoxBlock = styled.div`
    margin-top: 2rem;
    .tag-category {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
    button {
        font-size: 1rem;
        color: ${palette.gray[4]};
        border: 1px solid ${palette.gray[3]};
        border-radius: 20px;
        padding: 0.3rem 0.8rem;
        &:focus {
            color: ${palette.orange[2]};
            border: 1px solid ${palette.orange[2]};
        }
    }
`;

const categories = ['#일상', '#멋짐', '#사소', '#플렉스', '#뻔뻔'];
const TagBox = ({ onclickTag, hashtags, onRemoveTag }) => {
   
    return (
        <TagBoxBlock>
            <div>
                <span>연관된 태그를 선택하세요.</span>
                <ul className="tag-category">
                    {categories.map((hashtag, idx) => (
                        <li key={idx} onClick={() => onclickTag(hashtag)}>
                            <button type="button" >{hashtag}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="tag-category">
                {/* {hashtags.map((hashtag, idx) => (
                    <li key={idx} onClick={() => onRemoveTag(idx)}>
                        <button type="button">{hashtag}</button>
                    </li>
                ))} */}
            </ul>
        </TagBoxBlock>
    );
};

export default TagBox;