import * as api from '../lib/api';

const COOL_BTN = 'COOL_BTN';
const COOL_BTN_SUCCESS = 'COOL_BTN_SUCCESS';
const COOL_BTN_FAILURE = 'COOL_BTN_FAILURE';

/*
클라이언트에서 서버로 post_id, user_id 값을 서버로 전달 
눌렀는지 안눌렀는지 
안눌렀는데 누르면 +1
눌렀는데 또 누르면 -1
done: false,
count: 0,
*/

export const clickCoolBtn = (id) => async (dispatch) => {
    dispatch({ type: COOL_BTN }); //시작 
    try {
      const response = await api.clickCoolBtn(id);
      dispatch({
        type: COOL_BTN_SUCCESS,
        payload: response.data,
      }); //성공
    } catch (e) {
      dispatch({
        type: COOL_BTN_FAILURE,
        payload: e,
        error: true,
      }); //실패
      throw e;
    }
 }

const initialState = {
    coolBtn: null,
    error: null,
    loading: false,
};

const cool = (state=initialState, action) => {
    switch(action.type){
        case COOL_BTN:
            return {
                ...state,
                loading: true,
            }
        case COOL_BTN_SUCCESS:
            return {
                ...state,
                coolBtn: action.payload,
                loading: false,
            }
        case COOL_BTN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default cool;
