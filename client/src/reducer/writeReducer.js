import * as api from '../lib/api';

//글쓰기 페이지 모든 내용 초기화
const WRITE_INITIALIZE = 'WRITE_INITIALIZE';

//글 등록하기
const WRITE_POST = 'WRITE_POST'; 
const WRITE_POST_SUCESS = 'WRITE_POST_SUCESS'; 
const WRITE_POST_FAILURE = 'WRITE_POST_FAILURE'; 

//해시태그 선택하여 추가하기
const ADD_HASHTAG = 'ADD_HASHTAG';

//선택된 해시태그 삭제하기
const REMOVE_HASHTAG = 'REMOVE_HASHTAG';

//액션 생성 함수 

export const writeInitialize = () => ({
    type: WRITE_INITIALIZE,
});

export const addHashtag = (hashtag) => ({
    type: ADD_HASHTAG,
    hashtag,
})

export const removeHashtag = (id) => ({
    type: REMOVE_HASHTAG,
    id,
})

export const writePost = ({ post_title, post_content, post_image, hashtags }) => async (dispatch) => {
    dispatch({ type: WRITE_POST }); //시작 
    try {
      const response = await api.writePost({ post_title, post_content, post_image, hashtags });
      dispatch({
        type: WRITE_POST_SUCESS,
        payload: response.data,
      }); //성공
    } catch (e) {
      dispatch({
        type: WRITE_POST_FAILURE,
        payload: e,
        error: true,
      }); //실패
      throw e;
    }
 }


//초깃값
const initialState = {
    title: '',
    post_content: '',
    hashtags: [],
    post_image: '',
    post: null,
    postError: null,
    loading: false,
}

const write = (state=initialState, action) => {
    switch(action.type){
        case WRITE_INITIALIZE: 
            return initialState;
        case WRITE_POST:
            return {
                ...state,
                post: null,
                postError: null,
                loading: true,
            }
        case WRITE_POST_SUCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
            }
        case WRITE_POST_FAILURE:
            return {
                ...state,
                postError: action.payload,
                loading: false,
            }
        case ADD_HASHTAG:
            return {
                ...state,
                hashtags: [...state.hashtags, action.payload],
            }
        case REMOVE_HASHTAG:
            return {
                ...state,
                hashtags: [...state.hashtags.filter((tag, idx) => idx !== action.payload)]
            }
        default:
            return initialState;
    }
}

export default write;