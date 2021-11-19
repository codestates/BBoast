import * as api from '../lib/api';

//액션타입

//모든 글 불러오기
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

//액션 생성 함수 

export const getPosts = (hashtag) => async (dispatch) => {
    dispatch({ type: GET_POSTS }); //시작 
    try {
      const response = await api.getPosts(hashtag);
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data,
      }); //성공
    } catch (e) {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: e,
        error: true,
      }); //실패
      throw e;
    }
 }

//초깃값 
const initialState = {
    posts: null,
    error: null,
    loading: false,
}

const posts = (state=initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default posts;