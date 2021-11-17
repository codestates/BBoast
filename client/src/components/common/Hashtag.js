import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../style/palette";

const Tag = styled.div`
    .tag {
        font-size: 0.8rem;
        color: ${palette.gray[4]};
        border: 1px solid ${palette.gray[3]};
        border-radius: 20px;
        padding: 0.3rem 0.8rem;
        text-decoration: none;
        margin-right: 0.5rem;
        transition: all.3s;
        &:hover {
            color: ${palette.orange[2]};
            border: 1px solid ${palette.orange[2]};
        }
    }
`;

const Hashtag = ({ hashtags }) => {

    const tags = ['#일상', '#멋짐', '#뻔뻔'];
    return (
        <Tag>
            {tags.map((hashtag, idx) => (
                <Link 
                className="tag"
                key={idx}
                to={`/main?hashtag=${hashtag}`}
                >{hashtag}</Link> 
            ))}
        </Tag>
    );
};

export default Hashtag;