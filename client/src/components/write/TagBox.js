import React from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
    margin-top: 2rem;
    .tag-category {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
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

const TagBox = () => {
    return (
        <TagBoxBlock>
            <div>
                <span>연관된 태그를 선택하세요.</span>
                <ul className="tag-category">
                    <li>
                        <button type="button">#일상</button>
                    </li>
                    <li>
                        <button type="button">#멋짐</button>
                    </li>
                    <li>
                        <button type="button">#사소</button>
                    </li>
                    <li>
                        <button type="button">#플렉스</button>
                    </li>
                    <li>
                        <button type="button">#뻔뻔</button>
                    </li>
                </ul>
            </div>
            <ul>
                {/* 위에서 선택한거 표시 */}
            </ul>
        </TagBoxBlock>
    );
};

export default TagBox;