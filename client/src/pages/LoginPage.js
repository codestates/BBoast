import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthLoginForm from '../components/auth/AuthLoginForm'
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
    &:hover {
        background-color: white;
    }
`;

const LoginPage = () => {
    const socialLoginHandler = () => {
        // ToDo: 정확한 구글 소셜로그인 URL 알아내기
        let GOOGLE_LOGIN_URL = "https://accounts.google.com/o/oauth2/v2/auth"
        window.location.assign(GOOGLE_LOGIN_URL)
    }
    return (
        <AuthTemplate>
            <AuthLoginForm/>
            <SocialLoginBox>
                <SocialButton onClick={socialLoginHandler}>
                    <FcGoogle/> 
                    <p>Continue with Google</p>
                </SocialButton>
            </SocialLoginBox>
        </AuthTemplate>
    );
};

export default LoginPage;