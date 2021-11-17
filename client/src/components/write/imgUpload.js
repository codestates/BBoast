import React, { useState } from 'react';
import styled from 'styled-components';
import { RiImageAddLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

const ImgUploadBlock = styled.div`
    label {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1rem 1rem 0;
        cursor: pointer;
    }
`;

const ImgFileBox = styled.div`
    position: relative;
    max-width: 320px;
    height: 320px;
    .image-file {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .remove-icon {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        cursor: pointer;
    }
`;

const ImgUpload = ({ onFileChange, onRemoveImgFile, imgFile }) => {
    
    return (
        <ImgUploadBlock>
            <div>
                <label htmlFor="imgFile">
                    <span>이미지를 업로드하세요.</span>
                    <RiImageAddLine/>
                </label>
                <input 
                type="file"
                accept="image/*"
                name="imgFile"
                id="imgFile"
                className="imgInput"
                onChange={onFileChange} 
                style={{ display : 'none' }}
                />
            </div>
            { imgFile && (
                <ImgFileBox>
                    <div className="image-file">
                        <img 
                        src={imgFile}
                        style={{ backgroundImage : imgFile }} 
                        alt="" 
                        />
                    </div>
                    <div className="remove-icon" onClick={onRemoveImgFile}>
                        <FaTimes />
                    </div>
                </ImgFileBox>
            )}
        </ImgUploadBlock>
    );
};

export default ImgUpload;