import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Button from '../common/Button';

const AskDeleteUserBlock = styled.div`
    text-align: center;
    .check-box {
        display: flex;
        justify-content: space-around;
        margin-top: 1.5rem;
    }
`;
const AskButton = styled(Button)``;

const AskDeleteUser = ({modalToggle}) => {
    const state = useSelector( state => state.auth)
    const { userInfo } = state;
    const dispatch = useDispatch();
    const history = useHistory();
    // ToDo: 계정 삭제 핸들러
    const handleDelete = () => {
    //     axios.delete('http://localhost:4000/withdrawal', { userInfo } ,
    //     { withCredentials: true }
    // )
    //     .then((res) => {
    //         console.log(res)
    //         history.push('/')
    //     })
    //     .catch((err) => {
    //         history.push('/')
    //     })
        history.push('/');
    }

    return (
        <AskDeleteUserBlock>
            <h3>계정을 삭제하시겠습니까?</h3>
            <div className="check-box">
                <AskButton onClick={handleDelete}>확인</AskButton>
                <AskButton onClick={modalToggle}>취소</AskButton>
            </div>
        </AskDeleteUserBlock>
    );
};

export default AskDeleteUser;