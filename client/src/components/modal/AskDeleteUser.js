import React from 'react';
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

const AskDeleteUser = () => {
    return (
        <AskDeleteUserBlock>
            <h3>계정을 삭제하시겠습니까?</h3>
            <div className="check-box">
                <AskButton>확인</AskButton>
                <AskButton>취소</AskButton>
            </div>
        </AskDeleteUserBlock>
    );
};

export default AskDeleteUser;