import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostTagList from './PostTagList';
import CoolBtn from '../common/CoolBtn';

const PostItemStyle = styled.div`    
    background: #fff;
    padding: 2rem;
    margin-top: 3rem;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    .img-box {
        width: 100%;
        height: 200px;
        background: #f9eded;
        margin-bottom: 1rem;
    }
    .post-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;


const PostItem = ({ post }) => {
    // const { post_image, hashtags, cool_count, id } = post;
    return (
        <PostItemStyle>
            {/* 
            `/:id` 포스트디테일 페이지로 이동
             <Link to={`/${id}`}>
                <div className="img-box">
                    <img src="" alt="" />
                </div>
            </Link>
            */}
            <Link to="/post">
                <div className="img-box">
                    <img src="" alt="" />
                </div>
            </Link>
            <div className="post-box">
                <PostTagList
                //hashtags={hashtags}
                />
                {/* 
                    <div>
                        <CoolBtn/>
                        <span>{cool_count}</span>
                    </div>
                */}
                <CoolBtn/>
            </div>
        </PostItemStyle>
    );
};

export default PostItem;