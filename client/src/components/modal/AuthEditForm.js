import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../auth/Input';

const AuthEditFormBlock = styled.div`
    margin-top: 1rem;
    .logo {
        display: block;
        font-size: 3rem;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .userInfo-delete {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        p {
            border-bottom: 1px solid #000;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }
`;

const AuthButton = styled(Button)`
    width: 100%;
    padding: 0.75rem 0 ;
    margin-top: 1rem;
    font-size: 1.2rem;
    background: green;
`;

const AuthEditForm = ({ deleteUserClick }) => {
    return (
        <div>
        <AuthEditFormBlock>
            <h1 className="logo">BBoast</h1>
            <form>
                <Input 
                type="text"
                autoComplete="username" 
                name="username"
                placeholder="Name"
                value=""
                />
                <Input 
                type="email"
                autoComplete="email"
                name="email"
                placeholder="Email"
                value="" 
                />
                <Input 
                type="password" 
                name="password"
                placeholder="Password"
                value=""
                />
                <Input 
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                value="" 
                />
                <AuthButton >회원정보 수정</AuthButton>
            </form>
            <div className="userInfo-delete" onClick={deleteUserClick}>
                <p>Delete your <b>BBoast</b> account</p>
            </div>
        </AuthEditFormBlock>
        </div>
    );
};

export default AuthEditForm;