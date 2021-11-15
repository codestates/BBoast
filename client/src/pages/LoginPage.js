import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm'
import Button from '../components/common/Button';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const SocialLoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0.5rem;
`; 

const SocialButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.75rem 0 ;
    color: #000;
    font-size: 1.2rem;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    gap: 1rem;
`;

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login"/>
            <SocialLoginBox>
                <SocialButton>
                    <FcGoogle/> 
                    <p>Continue with Google</p>
                </SocialButton>
            </SocialLoginBox>
        </AuthTemplate>
    );
};

export default LoginPage;