import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalTemplate from './ModalTemplate';
import Button from '../common/Button';

const AskCheckModalBox = styled.div`
    p {
        margin: 1rem 0 2rem;
    }
    .check-btn {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        a {
            color: inherit;
            text-decoration: none;
        }
    }
`;

const AskCheckModal = ({ onConfirmModal, onRemove }) => {

    return (
        <ModalTemplate onConfirmModal={onConfirmModal}>
            <AskCheckModalBox>
                <h2>글 삭제</h2>
                <p>작성하신 글을 정말 삭제하시겠습니까?</p>
                <div className="check-btn">
                    <Button onClick={onConfirmModal}>취소</Button>
                    <Button onClick={onRemove}>삭제</Button>
                </div>
            </AskCheckModalBox>
        </ModalTemplate>
    );
};

export default AskCheckModal;