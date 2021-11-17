import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../auth/Input';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoEdit } from '../../actions/authActions';
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

const AuthEditFormBlock = styled.div`
    margin-top: 1rem;
    .logo {
        display: block;
        font-size: 3rem;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .userInfo-delete {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        p {
            border-bottom: 1px solid black;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }
`;

const Message = styled.div`
    font-size: 10px;
    color: ${palette.red[0]};
    margin-left: 2px;
`;

const AuthButton = styled(Button)`
    width: 100%;
    padding: 0.75rem 0 ;
    margin-top: 1rem;
    font-size: 1.2rem;
`;

const AuthEditForm = ({ deleteUserClick, modalToggle }) => {
    
    const history = useHistory();
    const state = useSelector( state => state.auth)
    const dispatch = useDispatch();
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

    const handleEdit = (e) => {
        e.preventDefault();
        const { name, email, password, confirm } = userInfo;
        // Todo: Store 만들어서 유저 정보를 전역 변수를 관리해야 한다.
        if( name === '' || email === '' || password === '' || confirm === ''){
            setErrorMessage('모든 항목은 필수입니다')
        } else {
            axios.patch('https://localhost:3000/edit', { name, email, password, confirm }, { headers : { 'Content-Type' : 'application/json'}})
            .then((data) => {
                // ToDo: 받아온 데이터를 상태에 저장합니다.
                // ! dispatch(userInfoEdit(username, email, password))
                // 로그인 창으로 이동합니다.
                history.push("/mypage")
            })
            .catch((err) => {
                setErrorMessage('올바르지 않은 회원정보입니다.')
            })
        }

    }
    return (
        <div>
        <AuthEditFormBlock>
            <h1 className="logo">BBoast</h1>
            <form>
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
                <AuthButton onClick={handleEdit}>Edit</AuthButton>
            </form>
            <div className="userInfo-delete" onClick={deleteUserClick}>
                <p>Delete your <b>BBoast</b> account</p>
            </div>
        </AuthEditFormBlock>
        </div>
    );
};

export default AuthEditForm;