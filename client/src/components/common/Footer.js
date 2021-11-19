import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
display: flex;
padding: 3rem 0;
bottom: 0;
left: 0;
justify-content: center;
width: 100%;
`

export const FooterBody = styled.div`
width: 30%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
margin-left: 50px;
`

const Footer = () => {
    return <FooterContainer>
        <FooterBody>
            Copyright © BBoast. All rights reserved.
        </FooterBody>
    </FooterContainer>
}

export default Footer;