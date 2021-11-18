import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../style/palette';
import logo from '../../lib/image/logo.jpeg';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 3.2rem;
    padding: 3rem 4rem;
    align-items: center;
    .space {
        flex: 1;
    }
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
        border-bottom: 3px solid ${palette.orange[2]};
    }
`;

const LogoContainer = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
        width: 50%;
        height: 100px;
    }
`;

const BtnContainer = styled.div`
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

    return (
        <NavContainer>
            <div className="space"></div>
            <LogoContainer to="/main">
                <div className="logo"
                style={{ 
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                >
                </div>
            </LogoContainer>
            <BtnContainer>
                {
                    btnArr.map((btn, idx) => <NavBtn key={idx} to={btn.to}>{btn.name}</NavBtn>)
                }
            </BtnContainer>
        </NavContainer>
    )
}

export default Nav;