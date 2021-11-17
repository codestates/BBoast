import React from 'react';
import styled from 'styled-components';
import Hashtag from '../common/Hashtag';
import CoolBtn from '../common/CoolBtn';

const ContentsBlock = styled.div`
    margin-bottom: 2rem;
    .image-box {
        margin-top: 2rem;
        width: 100%;
        padding: 0 10rem;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .tag-box {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const PostContents = ({ post, onClickCoolBtn }) => {
    // const { post_title, post_content, post_image, hashtags } = post
    return (
        <ContentsBlock>
            <div className="image-box">
                <img src="" alt="" />
            </div>
            <div className="tag-box">
                <Hashtag
                //hashtags={hashtags}
                />
                <CoolBtn
                //onClickCoolBtn={onClickCoolBtn}
                />
            </div>
            <p>description</p>
        </ContentsBlock>
    );
};

export default PostContents;