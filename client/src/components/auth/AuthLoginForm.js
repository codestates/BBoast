import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, userInfo } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from './Input';
import axios from 'axios'
import palette from '../../style/palette';

const Input2 = styled(Input)`
    margin-top: 1rem;
    border: solid 2px ${palette.wheat[0]};
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0.3rem;

    &:focus {
        border: solid 2px ${palette.orange[0]};
        opacity: 0.7;
    }
`;

const AuthFormBlock = styled.div`
    margin-top: 1rem;
`;

const AuthButton = styled(Button)`
    width: 100%;
    padding: 0.75rem 0 ;
    margin-top: 1rem;
    font-size: 1.2rem;
`;

const AuthFormFooter = styled.div`
    text-align: center;
    margin-top: 2rem;
    a {
        font-size: 0.8rem;
        text-decoration: underline;
        color: inherit;
        &:hover {
            color: ${palette.red[0]};
        }
    }
`;

const Message = styled.div`
font-size: 10px;
color: ${palette.red[0]};
margin-left: 2px;

`
const ErrorMessage = styled.div`
font-size: 15px;
color: ${palette.red[0]};
text-align: center;
padding-top: 1rem;
`


const AuthLoginForm = () => {
    const state = useSelector( state => state.auth);
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    
    const [errorMessage, setErrorMessage] = useState('')
    // 오류메시지 
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    // 유효성 검사
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const handleInputValue = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };

    const handleInputEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        setLoginInfo({ ...loginInfo, [e.target.name] : e.target.value })

        if(!emailRegex.test(e.target.value)){
            setEmailMessage('올바르지 않은 이메일 형식입니다')
            setIsEmail(false)
        } else {
            setEmailMessage('')
            setIsEmail(true)
        }
    }


    const handleInputPassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setLoginInfo({ ...loginInfo, [e.target.name] : e.target.value })
        if(!passwordRegex.test(e.target.value)){
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요')
            setIsPassword(false)
        } else {
            setPasswordMessage('')
            setIsPassword(true)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if(email === '' || password === '') {
            setErrorMessage('이메일과 비밀번호를 입력하세요')
            setTimeout(() => setErrorMessage(''), 3000)
        } else {
            axios.post('http://localhost:4000/login', { email, password }, {headers : { 'Content-Type' : 'application/json'}})
            .then((data) => {
                console.log(data)
                dispatch(login(data.email, data.password))
            })
            .catch((err) => {
                setErrorMessage('서버로부터의 응답이 없습니다.')
                setTimeout(() => setErrorMessage(''), 3000)
            })
        }
    }

    return (
        <AuthFormBlock>
            <form >
                <Input2 
                    type="email"
                    autoComplete="on"
                    name="email"
                    placeholder="email"
                    value={loginInfo.email}
                    onChange={handleInputEmail}
                />
                <Message>{emailMessage}</Message>
                <Input2 
                    type="password" 
                    name="password"
                    placeholder="password"
                    value={loginInfo.password}
                    onChange={handleInputPassword}
                />
                <Message>{passwordMessage}</Message>
                <AuthButton onClick={handleLogin}>Login</AuthButton>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </form>
            <AuthFormFooter>
                <Link to="/signUp">아직 계정이 없으신가요?</Link>
            </AuthFormFooter>
        </AuthFormBlock>
    );
};

export default AuthLoginForm;