import React from 'react';
import styled from 'styled-components';
import { RiThumbUpLine, RiThumbUpFill} from 'react-icons/ri'

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

const CoolBtn = ({ onClickCoolBtn }) => {
    /*
    쿨버튼의 값을 받아와서
    클릭되면 눌린 상태값과 카운트 적용 
    */

    return (
        <CoolBtnContainer 
        //onClick={onClickCoolBtn}
        >
            {/* {done ? <RiThumbUpFill /> : <RiThumbUpLine />}  */}
            <RiThumbUpLine />
            <BtnNum>12</BtnNum>
        </CoolBtnContainer>
    )
}

export default CoolBtn;