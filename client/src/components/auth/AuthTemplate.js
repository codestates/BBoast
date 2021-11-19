import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthBox = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    width: 360px;
    border-radius: 2px;
    padding: 2rem; 
    .logo {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <AuthBox>
            <h1 className="logo">BBoast</h1>   
            { children }
            </AuthBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;