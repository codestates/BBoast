import React from "react";
import styled from "styled-components";


export const Tag = styled.button`
width: 70px;
height: 30px;
font-size: 12px;
background-color: white;
border-radius: 14px;
color: #959595;
font-size: 13px;
font-weight: 500;
text-decoration: none;
border: solid 1px #EEEEEE;
cursor: pointer;
margin: 0 5px;
:focus {
    color: #00C6BC;
    border: solid 1px #00C6BC;
    

}
`
export const TagContainer = styled.div`
height: 50px;
width: 100%;
border: solid 1px white;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`


const Hashtag = () => {

    const tagArr = [
        { name: '#방청소' },
        { name: '#기상미션' },
        { name: '#다이어트' }
    ]
    return <TagContainer>
        {
            tagArr.map((tag, idx) => <Tag key={idx}>{tag.name}</Tag>)
        }
    </TagContainer>
}

export default Hashtag;