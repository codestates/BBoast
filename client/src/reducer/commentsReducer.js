import * as api from '../lib/api';

//인풋값 변경
const CHANGE_INPUT = 'CHANGE_INPUT';

//코멘트 등록하기
const WRITE_COMMENTS = 'WRITE_COMMENTS';
const WRITE_COMMENTS_SUCCESS = 'WRITE_COMMENTS_SUCCESS';
const WRITE_COMMENTS_FAILURE = 'WRITE_COMMENTS_FAILURE';

export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input,
})

export const writeComment = ({ user_id, id, comment_content }) => async dispatch => {
    dispatch({ type: WRITE_COMMENTS }); //요청 시작
    try {
        const response = await api.writeComment({ user_id, id, comment_content }); //API 호출
        dispatch({ 
            type: WRITE_COMMENTS_SUCCESS, 
            payload: response.data, 
        }); //성공
    } catch(e){
        dispatch({ 
            type: WRITE_COMMENTS_FAILURE, 
            payload: e,
            error: true,
        }); //실패
    }
}

const initialState = {
    comments: null,
    loading: false,
    error: null,
}

const comment = ( state=initialState, action) => {
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            }
        case WRITE_COMMENTS:
            return {
                ...state,
                loading: true,
            }
        case WRITE_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        case WRITE_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default comment;