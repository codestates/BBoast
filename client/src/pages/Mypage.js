import React from 'react'
import styled from 'styled-components';

import { TiDelete } from 'react-icons/ti'
export const MyPageContainer = styled.div`
height: 100%;
width: 100%;
padding: 50px 150px;
`

export const MyInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
height: 200px;
width: 100%;
padding: 0 25px 0 25px;
`
export const EditBtn = styled.button`
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
margin-bottom: 20px;
`

export const MyPosts = styled.ul`
height: 200px;
width: 100%;

display:flex;
justify-content: space-around;
`

export const MyPost = styled.li`
height: 100%;
width: 150px;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
color: red;
position: relative;
`

export const Thumbnail = styled.img`
height: 100%;
width: 200px;
position: absolute;
border-radius: 15px;
`
export const ProfileImage = styled.img`
height: 90px;
width: 90px;
border-radius: 50%;

`

export const DeleteBtn = styled.div`
position: relative;
bottom: 80px;
left: 80px;
font-size: 35px;
`

const MyPage = () => {
    return <MyPageContainer>
        <MyInfo>
            <div className="profile">
                <ProfileImage alt="xbox" src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTBfMTQx/MDAxNTk0MzczNDk4OTU5.-JD5btJXp8mB2ds7VS5oAGgp2VsjBOl_FxU9NbpXqXkg.cGssald6bJP874Qyl1uDz5yGPzaLX7ntS6c6W9vJBtIg.JPEG.dlqls01/e433bc2d6103d0ebbf34077509261cf3ff.jpg?type=w800" />
                <h3>훈이</h3>
                <p>hoon2@codeastates.com</p>
            </div>
            <div className="profile-edit">
                <EditBtn>프로필 수정</EditBtn>
            </div>
        </MyInfo>
        <div>
            <h2 className="myposts-title"> 내가 쓴 글 목록</h2>
        </div>
        <MyPosts>
            <MyPost>
                <Thumbnail alt="mypost" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73deb87fa11d02831de04ca5aee4f7f339edb1c2bd9477836de58665e5b3ecd2a4d0dfe34038a272e3be5dfcf7c224552b6b6037b764be58dda21d4c6fabcf942d7578a43b0513538c057f35795fc5b529d8d1f249727d74ee69db993d3ae3883809a404c80ac" />
                <DeleteBtn>
                    <TiDelete />
                </DeleteBtn>
            </MyPost>
            <MyPost>
                <Thumbnail alt="mypost" src="https://tistory1.daumcdn.net/tistory/3758313/attach/c7437ba452a4485eba7020b7bddec0eb" />
                <DeleteBtn>
                    <TiDelete />
                </DeleteBtn>
            </MyPost>
            <MyPost>
                <Thumbnail alt="mypost" src="https://pbs.twimg.com/profile_images/980072119701680128/mfWFp-Ch_400x400.jpg" />
                <DeleteBtn>
                    <TiDelete />
                </DeleteBtn>
            </MyPost>
        </MyPosts>
    </MyPageContainer>
}

export default MyPage;