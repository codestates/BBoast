import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Input from '../components/auth/Input';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import TagBox from '../components/write/TagBox';
import { addHashtag, removeHashtag, writePost, changeField, writeInitialize } from '../reducer/writeReducer';

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
    const history = useHistory();
    const dispatch = useDispatch();
    const { post_title, post_content, post_image, hashtags, post, postError } = useSelector(({ write }) => ({
        post_title: write.post_title,
        post_content: write.post_content,
        post_image: write.post_image,
        hashtags: write.hashtags,
        post: write.post,
        postError: write.postError
    }))

    // const [imgFile, setImgFile] = useState('');

    const onChangeTitle = e => {
        dispatch(changeField({
            key: 'post_title',
            value: e.target.value,
        }));
    }

    const onChangeContent = e => {
        dispatch(changeField({
            key: 'post_content',
            value: e.target.value,
        }));
    }

    //태그선택
    const onclickTag = (hashtag) => {
        if(!hashtag){
            return;
        }
        if(hashtags.includes(hashtag)){
            return;
        }
        dispatch(addHashtag(hashtag))
    }

    //선택한 태그 삭제
    const onRemoveTag = (id) => {
        dispatch(removeHashtag(id));
    }

    const onPublish = () => {
        dispatch(writePost({
            post_title,
            post_content,
            hashtags,
        }))
    }

    useEffect(() => {
        if(post){
            //글이 잘 등록되었으면 작성된 글의 상세페이지로 이동
            const { id } = post;
            history.push(`/posts/${id}`);
        }
        if(postError){
            console.log(postError);
        }
    })

    // 사용자가 글쓰기 페이지 벗어날때 내용 초기화
    useEffect(() => {
        return () => {
            dispatch(writeInitialize());
        }
    },[dispatch]);
    

    return (
        <>
            <Nav/>
            <WritePageBlock>
                <form>
                    <InputStyle 
                    type="text"
                    placeholder="제목"
                    name="title"
                    value={post_title} 
                    onChange={onChangeTitle}
                    />
                    {/* <ImgUpload
                    // imgFile={imgFile}
                    // onFileChange={onFileChange}
                    // onRemoveImgFile={onRemoveImgFile}
                    /> */}
                    <TextareaStyle 
                    name="description" 
                    placeholder="내용을 입력하세요."
                    value={post_content}
                    onChange={onChangeContent}
                    >
                    </TextareaStyle>
                    <TagBox 
                    hashtags={hashtags}
                    onclickTag={onclickTag}
                    onRemoveTag={onRemoveTag}
                    />
                    <div className="check-btn">
                        <Button onClick={onPublish}>글 등록</Button>
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