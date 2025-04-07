import {combineReducers} from "redux";
import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";

combineReducers({
    user: userReducer,
    stats: statsReducer,
})

