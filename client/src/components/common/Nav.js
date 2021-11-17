import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 3.2rem;
    padding: 3rem 4rem;
    align-items: center;
`;

export const NavBtn = styled(Link)`
    border-style: none;
    font-size: 1.4rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem;
    &:hover {
        font-weight: 800;
        border-bottom: 3px solid #F4DC00;
    }
`;

export const LogoContainer = styled.a`
    flex: 1;
    font-weight: 900;
    color: #F4DC00;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Nav = () => {

    const btnArr = [
        { name: 'write', to: '/write' },
        { name: 'mypage', to: '/mypage' },
        { name: 'logout', to: '/' }
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