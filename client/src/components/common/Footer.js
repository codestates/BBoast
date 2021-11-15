import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.div`
display: flex;
position: fixed;
bottom: 0;
left: 0;
justify-content: center;
height: 150px;
width: 100%;
background-color: #FAFAFA;
`

export const FooterBody = styled.div`
width: 30%;
height: 100%;
background-color: #FAFAFA;
color: #666666;
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