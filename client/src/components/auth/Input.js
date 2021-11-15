import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    width: 100%;
    font-size: 1rem;
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
    &:focus {
        border-bottom: 1px solid green;
    }
    &::placeholder {
        color: #b3b3b3;
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Input = (props) => {
    return (
        <InputStyle {...props}/>
    );
};

export default Input;