import {combineReducers, legacy_createStore as createStore} from "redux";
import {userReducer} from "../reducer/userReducer.js";
import {statsReducer} from "../reducer/statsReducer.js";


export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
});

export const store = createStore(rootReducer);