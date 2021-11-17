import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import { FaTimes } from 'react-icons/fa';
import ModalTemplate from '../components/modal/ModalTemplate';
import AuthEditModal from '../components/modal/AuthEditModal';
import AuthEditForm from '../components/modal/AuthEditForm';
import palette from '../style/palette';

const MyPageContainer = styled.div`
    width: 30%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    margin-top: 2rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .check-btn {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
`;

const MyInfo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top : 1em;    
    margin-bottom: 5em;
`;

const EditBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 80px;
    border: solid 1px black;
    background-color: #FAFAFA;
    border-radius: 10px;
    color: black;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: ${palette.gray[2]}
    }
    
`;

const MyPostsContainer = styled.div`
    width: 100%;
    height: 300px;
`

const MyPosts = styled.ul`
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: space-around;
`;

const MyPost = styled.li`
    width: 100%;
    font-size: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    position: relative;
`;

const Thumbnail = styled.img`
    width: 90%;
    height: 60%;
    position: absolute;
    border-radius: 15px;
`;

const ProfileImage = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-bottom: 2em;
`;

const DeleteBtn = styled.div`
    position: relative;
    bottom: 70px;
    left: 55px;
    font-size: 20px;
    cursor: pointer;
`;

const MyPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const modalToggle = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    // ToDo: 글 삭제 핸들러 함수
    const handleDeleteBtn = () => {
        
    }

    return (
        <>
            <Nav/>
            <MyPageContainer>
                <MyInfo>
                    <div className="profile">
                        <ProfileImage alt="xbox" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/06/urbanbrush-20200630000703398319.jpg" />
                        <h3>냥냥</h3>
                        <p>cat2021@codeastates.com</p>
                    </div>
                    <div className="profile-edit">
                        <EditBtn onClick={modalToggle}>프로필 수정</EditBtn>
                    </div>
                </MyInfo>
                <div>
                    <h2 className="myposts-title"> 내가 쓴 글 목록</h2>
                </div>
                <MyPostsContainer>
                <MyPosts>
                    <MyPost>
                        <Thumbnail alt="mypost" src="https://en.pimg.jp/043/365/839/1/43365839.jpg" />
                        <DeleteBtn onClick={handleDeleteBtn}>
                            <FaTimes />
                        </DeleteBtn>
                    </MyPost>
                    <MyPost>
                        <Thumbnail alt="mypost" src="https://png.pngtree.com/png-clipart/20210130/ourlarge/pngtree-pink-quilt-get-up-clip-art-png-image_2836982.jpg" />
                        <DeleteBtn onClick={handleDeleteBtn}>
                            <FaTimes />
                        </DeleteBtn>
                    </MyPost>
                    <MyPost>
                        <Thumbnail alt="mypost" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd798uRbi3sIPw4eLfinsK0G2i_wQjNlrLDw&usqp=CAU" />
                        <DeleteBtn onClick={handleDeleteBtn}>
                            <FaTimes />
                        </DeleteBtn>
                    </MyPost>
                </MyPosts>
                </MyPostsContainer>
            </MyPageContainer>
            <Footer/>
                {
                    isOpen ?
                    (
                        <AuthEditModal modalToggle={modalToggle}>
                            <AuthEditForm/>
                        </AuthEditModal>
                    ) : 
                    null
                }
        </>
    );
}

export default MyPage;