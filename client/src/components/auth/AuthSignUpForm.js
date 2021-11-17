import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    padding: 0.75rem 0;
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
color: red;
margin-left: 2px;

`
const ErrorMessage = styled.div`
font-size: 15px;
color: red;
text-align: center;
padding-top: 1rem;
`

const AuthSignUpForm = () => {
    const history = useHistory();

    // 이름, 이메일, 비밀번호, 비밀번호 확인
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    // 오류메시지 
    const [errorMessage, setErrorMessage] = useState('')
    const [nameMessage, setNameMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfrmMessage] = useState('')

    // 유효성 검사
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);


    const handleInputName = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
        const { name, email, password, confirm } = userInfo;
        if(name.length < 2 || name.length > 8){
            setNameMessage('2글자 이상 8글자 미만으로 입력해주세요')
            setIsName(false)
        } else {
            setNameMessage('')
            setIsName(true)
        }
    }

    const handleInputEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        setUserInfo({ ...userInfo, [e.target.name] : e.target.value })

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
        setUserInfo({ ...userInfo, [e.target.name] : e.target.value })
        if(!passwordRegex.test(e.target.value)){
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요')
            setIsPassword(false)
        } else {
            setPasswordMessage('')
            setIsPassword(true)
        }
    }

    const handleInputPasswordConfirm = (e) => {
        setUserInfo({ ...userInfo, [e.target.name] : e.target.value })
        const { password } = userInfo;
        if(password === e.target.value){
            setPasswordConfrmMessage('')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfrmMessage('입력한 비밀번호와 일치하지 않습니다')
            setIsPasswordConfirm(false)
        }
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        const { name, email, password, passwordConfirm } = userInfo;
        if( name === '' || email === '' || password === '' || passwordConfirm === ''){
            setErrorMessage('모든 항목은 필수입니다')
            setTimeout(() => setErrorMessage(''), 3000)
        } else if ( password !== passwordConfirm ){
            setErrorMessage('비밀번호가 일치하지 않습니다.')
            setTimeout(() => setErrorMessage(''), 3000)
        } else {
            axios.post('http://localhost:4000/signup', { name, email, password }, { headers : { 'Content-Type' : 'application/json'}})
            .then((data) => {
                    // 로그인 창으로 이동합니다.
                    history.push("/")
            })
            .catch((err) => {
                setErrorMessage('이미 가입된 회원입니다.')
                setTimeout(() => setErrorMessage(''), 3000)
                
            })
        }

    }
    return (
        <AuthFormBlock>
           <form >
                <Input2 
                    type="text"
                    autoComplete="on" 
                    name="name"
                    placeholder="name"
                    value={userInfo.name}
                onChange={handleInputName}
                />
                <Message>{nameMessage}</Message>
                <Input2 
                    type="email"
                    autoComplete="on"
                    name="email"
                    placeholder="email"
                    value={userInfo.email}
                    onChange={handleInputEmail}
                />
                <Message>{emailMessage}</Message>
                <Input2 
                    type="password" 
                    name="password"
                    placeholder="password"
                    value={userInfo.password}
                    onChange={handleInputPassword}
                />
                <Message>{passwordMessage}</Message>
                <Input2 
                    type="password"
                    name="passwordConfirm"
                    placeholder="confirm password"
                    value={userInfo.passwordConfirm}
                    onChange={handleInputPasswordConfirm}
                />
                <Message>{passwordConfirmMessage}</Message>
                <AuthButton onClick={handleSignUp}>Sign Up</AuthButton>
                <ErrorMessage>{errorMessage}</ErrorMessage>
           </form>
           <AuthFormFooter>
                <Link to="/">Login</Link>
            </AuthFormFooter>
        </AuthFormBlock>
    );
};

export default AuthSignUpForm;