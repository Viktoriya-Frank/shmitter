
import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";
import {combineReducers} from "redux";

// export const rootReducer = (state, action) => {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats, action),
//     }
// }

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})

