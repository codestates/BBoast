import React from 'react';
import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi'

const CoolBtnContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    color: #00C6BC;
    font-weight: 700;
    border-radius: 40px;
    cursor: pointer;
`;

const BtnNum = styled.div`
    margin-top: 2px;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    color: #00C6BC;
    margin-left: 5px;
    font-size: 0.7rem;
`;

const CoolBtn = () => {
    return (
        <CoolBtnContainer>
            <FiThumbsUp />
            <BtnNum>12</BtnNum>
        </CoolBtnContainer>
    )
}

export default CoolBtn;