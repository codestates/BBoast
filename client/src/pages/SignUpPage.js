import React from 'react';
import AuthSignUpForm from '../components/auth/AuthSignUpForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const SignUpPage = () => {
    return (
        <AuthTemplate>
            <AuthSignUpForm/>
        </AuthTemplate>
    );
};

export default SignUpPage;