import React from 'react';
import styled from 'styled-components';
import palette from '../../style/palette';
const ButtonStyle = styled.button`
    border-radius: 4px;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: ${palette.orange[0]};;
    cursor: pointer;
    &:hover {
        background: ${palette.orange[2]};
    }
`;

const Button = (props) => {
    return (
        <ButtonStyle {...props} />
    );
};

export default Button;