import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 30px;
    border-bottom: red;
    padding: 10px;
    align-items: center;
    background: #fafafa;
`;

export const NavBtn = styled(Link)`
    width: 100px;
    text-align: center;
    border: 3px solid;
    border-style: none;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    &:hover {
        font-weight: 800;
        border-bottom: 3px solid #F4DC00;
    }
`;

export const LogoContainer = styled.a`
    width: 15%;
    height: 100%;
    font-size: 48px;
    font-weight: 900;
    color: #F4DC00;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const BtnContainer = styled.div`
    width: 15%;
    right: 0;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    position: relative;
    right: 0;
`;

const Nav = () => {

    const btnArr = [
        { name: 'write', to: '/' },
        { name: 'mypage', to: '/mypage' },
        { name: 'login', to: '/' }
    ];

    return <NavContainer>
        <LogoContainer href="/">

        </LogoContainer>
        <LogoContainer href="/">
            BBoast‼
        </LogoContainer>
        <BtnContainer>
            {
                btnArr.map((btn, idx) => <NavBtn key={idx} to={btn.to}>{btn.name}</NavBtn>)
            }
        </BtnContainer>
    </NavContainer>
}

export default Nav;