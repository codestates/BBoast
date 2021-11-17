import React, { useState } from 'react';
import AskDeleteUser from './AskDeleteUser';
import AuthEditForm from './AuthEditForm';
import ModalTemplate from './ModalTemplate';

const AuthEditModal = ({ modalToggle }) => {
    const [deleteUser, setDeleteUser] = useState(false)

    //계정 삭제 모달창으로 이동
    const deleteUserClick = () => {
        setDeleteUser(true)
    }

    return (
        <ModalTemplate modalToggle={modalToggle}>
            { deleteUser ? (
            <AskDeleteUser modalToggle={modalToggle}/>
            ) : (
                <AuthEditForm deleteUserClick={deleteUserClick} modalToggle={modalToggle}/>
            )}
        </ModalTemplate>
    );
};

export default AuthEditModal;