// * action types

// 로그인
export const LOGIN = "LOGIN";
// 로그아웃
export const LOGOUT = "LOGOUT";
// 유저 정보 수정
export const USER_INFO_EDIT = "USER_INFO_EDIT";
// 회원 탈퇴
export const SIGN_OUT = "SIGN_OUT";

// * action creator functions

// 로그인
export const login = (email, password) => {
    return {
        type: LOGIN,
        payload : {
            email, password
        }
    }
};

// 로그아웃
export const logout = () => {
    return {
        type: LOGOUT,
    }
};

// 유저 정보 수정
export const userInfoEdit = (username, email, password) => {
    return {
        type: USER_INFO_EDIT,
        payload: {
            username, email, password
        }
    }
};

// 회원 탈퇴
export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
};