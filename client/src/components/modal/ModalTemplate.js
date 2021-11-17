import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const ModalBackground = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
`;

const ModalBox = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    width: 360px;
    background: #fff;
    border-radius: 2px;
    padding: 2rem; 
    z-index: 2;
    .close {
        display: flex;
        justify-content: flex-end;
        svg {
            cursor: pointer;
            width: 25px;
            height: 25px;
        }
    }
`;



const ModalTemplate = ({ children, modalToggle}) => {
    return (
        <ModalBackground >
            <ModalBox >
                <div className="close" onClick={modalToggle} >
                    <FaTimes />
                </div>
            { children }
            </ModalBox>
        </ModalBackground>
    );
};

export default ModalTemplate;