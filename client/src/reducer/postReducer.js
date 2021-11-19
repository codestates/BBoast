import * as api from '../lib/api';

//상세페이지 보여주기
const VIEW_POST = 'VIEW_POST';
const VIEW_POST_SUCCESS = 'VIEW_POST_SUCCESS';
const VIEW_POST_FAILURE = 'VIEW_POST_FAILURE';

//포스트 페이지에서 벗어날 때 내용 초기화
const VIEW_POST_INITIALIZE = 'VIEW_POST_INITIALIZE';

export const initializeViewPost = () => ({
    type: VIEW_POST_INITIALIZE,
})

export const viewPost = (id) => async (dispatch) => {
    dispatch({ type: VIEW_POST }); //시작 
    try {
      const response = await api.viewPost(id);
      dispatch({
        type: VIEW_POST_SUCCESS,
        payload: response.data,
      }); //성공
    } catch (e) {
      dispatch({
        type: VIEW_POST_FAILURE,
        payload: e,
        error: true,
      }); //실패
      throw e;
    }
 }

//초깃값 
const initialState = {
    post: null,
    error: null,
    loading: false,
};

const post = (state=initialState, action) => {
    switch(action.type){
        case VIEW_POST:
            return {
                ...state,
                loading: true,
            }
        case VIEW_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
            }
        case VIEW_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case VIEW_POST_INITIALIZE:
            return initialState;
        default:
            return state;
    }
}

export default post;
