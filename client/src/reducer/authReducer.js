import { LOGIN, LOGOUT, USER_INFO_EDIT, SIGN_OUT } from "../actions/authActions";

const initialState = {
    login: false,
    userInfo: {
        username: null,
        email: null,
        password: null
    }
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN : 
            return { 
                ...state, 
                login : true,
                userInfo : action.payload 
            }
        case LOGOUT : 
            return { 
                ...state, 
                login : false,
                userInfo : { 
                    username: null,
                    email: null,
                    password: null
                }
            }    
        case USER_INFO_EDIT : 
            return { 
                ...state, 
                userInfo: action.payload
            }
        case SIGN_OUT :
            return {
                ...state,
                login: false,
                userInfo: { 
                    username: null,
                    email: null,
                    password: null
                }
            }
        default : 
            return state
    }
}

export default auth;