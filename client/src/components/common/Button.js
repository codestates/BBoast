import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    border-radius: 4px;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: orange;
    cursor: pointer;
    &:hover {
        background: red;
    }
`;

const Button = (props) => {
    return (
        <ButtonStyle {...props} />
    );
};

export default Button;