import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

const ContentsBlock = styled.div`
    margin-bottom: 2rem;
    .image-box {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .tag-box {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
`;

const PostContents = () => {
    return (
        <ContentsBlock>
            <div className="image-box">
                이미지
                <img src="" alt="" />
            </div>
            <div className="tag-box">
                <ul>
                    <li>
                        <button>#뻔뻔</button>
                        <button>#멋짐</button>
                    </li>
                </ul>
                <AiOutlineLike/>
            </div>
            <p>description</p>
        </ContentsBlock>
    );
};

export default PostContents;