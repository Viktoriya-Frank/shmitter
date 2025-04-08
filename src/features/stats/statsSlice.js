import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: (state, action) => {
            const res = state[action.payload.statsType] + action.payload.sum;
            state[action.payload.statsType] = res >= 0 ? res : 0;
        }
    }
})

export default statsSlice.reducer;
export const {changeStats} = statsSlice.actions;