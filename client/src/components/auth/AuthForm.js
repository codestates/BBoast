import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from './Input';

const AuthFormBlock = styled.div`
    margin-top: 1rem;
`;

const AuthButton = styled(Button)`
    width: 100%;
    padding: 0.75rem 0 ;
    margin-top: 1rem;
    font-size: 1.2rem;
    background: green;
`;

const AuthFormFooter = styled.div`
    text-align: center;
    margin-top: 2rem;
    a {
        font-size: 0.8rem;
        text-decoration: underline;
        color: inherit;
        &:hover {
            color: red;
        }
    }
`;

const textType = {
    login: 'Login',
    signUp: 'Sign Up'
}

const AuthForm = ({ type }) => {
    const text = textType[type]

    return (
        <AuthFormBlock>
           <form >
               { type === 'signUp' && (
                    <Input 
                    type="text"
                    autoComplete="username" 
                    name="username"
                    placeholder="Name"
                    value=""
                    />
                )}
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
                { type === 'signUp' && (
                    <Input 
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    value="" 
                    />
                )}
                {/* { error && <ErrorMessage>{error}</ErrorMessage>} */}
                <AuthButton>{text}</AuthButton>
           </form>
           <AuthFormFooter>
               { type === 'login' ? (
                    <Link to="/signUp">아직 계정이 없으신가요?</Link>
               ) : (
                    <Link to="/">Login</Link>
               )}
            </AuthFormFooter>
        </AuthFormBlock>
    );
};

export default AuthForm;