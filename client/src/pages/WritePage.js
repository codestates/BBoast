import React from 'react';
import styled from 'styled-components';
import Input from '../components/auth/Input';
import Button from '../components/common/Button';
import ImgUpload from '../components/write/imgUpload';
import TagBox from '../components/post/TagBox';

const WritePageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    margin-top: 2rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .check-btn {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
`;

const InputStyle = styled(Input)`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    &:focus {
        border-bottom: 1px solid #000;
    }
`;

const TextareaStyle = styled.textarea`
    width: 100%;
    height: 40vh;
    font-size: 1.2rem;
    resize: none;
    margin-top: 2rem;
    padding-top: 1.5rem;
    &::placeholder {
        font-size: inherit;
        color: #b3b3b3;
    }
`;

const WriteButton = styled(Button)``;

const WritePage = () => {
    return (
        <WritePageBlock>
            <form>
                <InputStyle 
                type="text"
                placeholder="제목"
                name="title" 
                value=""
                />
                <ImgUpload/>
                <TextareaStyle 
                name="description" 
                id="" 
                placeholder="내용을 입력하세요."
                >
                </TextareaStyle>
                <TagBox/>
                <div className="check-btn">
                    <WriteButton>글 등록</WriteButton>
                    <WriteButton>취소</WriteButton>
                </div>
            </form>
        </WritePageBlock>
    );
};

export default WritePage;