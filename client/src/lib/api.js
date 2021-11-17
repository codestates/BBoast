import axios from "axios";

//글 등록 
export const writePost = ({ post_title, post_content, post_image, hashtags }) =>
    axios.post('http://localhost:4000/posts', { post_title, post_content, post_image, hashtags });

//모든 글 불러오기
// export const getPosts = () => 
//     axios.get('http://localhost:4000/posts/list')
export const getPosts = ( hashtag ) => 
    axios.get(`http://localhost:4000/posts/list?hashtag=${hashtag}`)

//특정 글 보기
export const viewPost = id => axios.get(`http://localhost:4000/posts/${id}`);

//특정 글 삭제하기
export const removePost = id => axios.delete(`http://localhost:4000/posts/${id}`);

//포스트에 댓글 추가하기
export const writeComment = ({ user_id, id, comment_content }) =>
    axios.post(`http://localhost:4000/posts/${id}/comments`, { user_id, comment_content });

//쿨버튼 클릭
export const clickCoolBtn = ({ user_id, id }) => 
axios.post(`http://localhost:4000/posts/${id}/cool`, { user_id });
