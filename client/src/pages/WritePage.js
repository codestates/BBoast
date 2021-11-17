import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/auth/Input';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import ImgUpload from '../components/write/imgUpload';
import TagBox from '../components/write/TagBox';

const WritePageBlock = styled.div`
    width: 40%;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .check-btn {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
`;

const InputStyle = styled(Input)`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    &:focus {
        border-bottom: 1px solid #000;
    }
`;

const TextareaStyle = styled.textarea`
    width: 100%;
    height: 25vh;
    font-size: 1.2rem;
    resize: none;
    margin-top: 2rem;
    padding-top: 1.5rem;
    &::placeholder {
        font-size: inherit;
        color: #b3b3b3;
    }
`;

const WriteButton = styled(Button)`
    a {
        color: inherit;
        text-decoration: none;
    }
`;

const WritePage = () => {
    /*
    const dispatch = useDispatch();
    const { hashtags, post } = useSelector(({ write }) => ({
        hashtags: write.hashtags,
        post: write.post,
        postError: write
    }))
    */
    const [imgFile, setImgFile] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectTag, setSelectTag] = useState([]); //hashtags

    //태그선택
    /*
    const onclickTag = (hashtag) => {
        if(!tag){
            return;
        }
        if(hashtags.includes(tag)){
            return;
        }
        dispatch(addHashtag(hashtag))
    }
    */
    const onclickTag = (tag) => {
        setSelectTag([
            ...selectTag,
            tag
        ])
    }
    //선택한 태그 삭제
    /*
    const onRemoveTag = (id) => {
        dispatch(removeHashtag(id));
    }

    */
    const onRemoveTag = (id) => {
        const filterTag = selectTag.filter((tag, idx) => idx !==id);
        setSelectTag(filterTag);
    }

    //사진 미리보기
    const onFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const { result } = finishedEvent.currentTarget
            setImgFile(result)
        }
        if(file){
            //readAsDataURL함수 : 파일 정보를 인자로 받아서 파일 위치를 URL로 반환
            reader.readAsDataURL(file);
        }
    }
    //선택한 사진 취소하기
    const onRemoveImgFile = () => {
        setImgFile('')
    }

    //글 폼 전송하기
    /*
        FormData.append을 사용하여 key/value 쌍을 추가

        const submitForm = (e) => {
           e.preventDefault();

            const formData = new FormData();
            formData.append('post_title', title);
            formData.append('post_content', content);
            formData.append('post_image', imgFile);
            formData.append('hashtags', hashtags);

            axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
                성공하면 생성된 포스트를 받고, 해당 상세페이지로 이동
                
                history.push(`/posts'${id});
            })
            .catch((error) => {
                console.log(error)
            });
        } 
        사용자가 글쓰기 페이지 벗어날때 내용 초기화
        useEffect(() => {
            return () => {
                dispatch(writeInitialize());
            }
        })
    */

    return (
        <>
            <Nav/>
            <WritePageBlock>
                <form 
                //onSubmit={onSubmitForm}
                >
                    <InputStyle 
                    type="text"
                    placeholder="제목"
                    name="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <ImgUpload
                    imgFile={imgFile}
                    onFileChange={onFileChange}
                    onRemoveImgFile={onRemoveImgFile}
                    />
                    <TextareaStyle 
                    name="description" 
                    placeholder="내용을 입력하세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    >
                    </TextareaStyle>
                    <TagBox 
                    //hashtags
                    selectTag={selectTag}
                    onclickTag={onclickTag}
                    onRemoveTag={onRemoveTag}
                    />
                    <div className="check-btn">
                        <Button>글 등록</Button>
                        <WriteButton>
                            <Link to="/main">취소</Link>
                        </WriteButton>
                    </div>
                </form>
            </WritePageBlock>
            <Footer/>
        </>
    );
};

export default WritePage;