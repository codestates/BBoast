import { combineReducers } from "redux";
import post from './postReducer';
import write from './writeReducer';
import posts from './postsReducer';
import cool from './coolBtnReducer';
import comment from './commentsReducer';
import auth from "./authReducer";

const rootReducer = combineReducers({
    post,
    write,
    posts,
    cool,
    comment,
    auth
});

export default rootReducer;