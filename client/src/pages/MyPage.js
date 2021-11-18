import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import { FaTimes } from 'react-icons/fa';
import AuthEditModal from '../components/modal/AuthEditModal';
import AuthEditForm from '../components/modal/AuthEditForm';
import Button from '../components/common/Button';
import palette from '../style/palette';

const MyPageContainer = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    margin-top: 2rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .myposts-title {
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${palette.gray[4]};
    }
`;

const MyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 3rem;
    .profile {
       display: flex;
       flex-direction: column;
       h3 {
           margin-bottom: 0.5rem;
       }
       p {
           color: ${palette.gray[4]};
       }
    }
`;

const ProfileImage = styled.img`
    width: 90px;
    border-radius: 50%;
    margin-bottom: 2rem;
`;

const EditBtn = styled(Button)`
    border-radius: 25px;    
`;

const MyPosts = styled.ul`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`;

const MyPost = styled.li`
    width: 30%;
    position: relative;
    .thumbnail {
        img {
            width: 100%;
        }
    }
    .delete-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
        cursor: pointer;
    }
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
                    <h2 className="myposts-title"> 나의 글 목록</h2>
                </div>
                <div>
                    <MyPosts>
                        <MyPost>
                            <div className="thumbnail">
                                <img alt="mypost" src="https://en.pimg.jp/043/365/839/1/43365839.jpg" />
                            </div>
                            <div  className="delete-btn" onClick={handleDeleteBtn}>
                                <FaTimes />
                            </div>
                        </MyPost>
                        <MyPost>
                            <div className="thumbnail">
                                <img alt="mypost" src="https://png.pngtree.com/png-clipart/20210130/ourlarge/pngtree-pink-quilt-get-up-clip-art-png-image_2836982.jpg" />
                            </div>
                            <div className="delete-btn" onClick={handleDeleteBtn}>
                                <FaTimes />
                            </div>
                        </MyPost>
                        <MyPost>
                            <div className="thumbnail">
                                <img alt="mypost" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd798uRbi3sIPw4eLfinsK0G2i_wQjNlrLDw&usqp=CAU" />
                            </div>
                            <div className="delete-btn" onClick={handleDeleteBtn}>
                                <FaTimes />
                            </div>
                        </MyPost>
                    </MyPosts>
                </div>
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