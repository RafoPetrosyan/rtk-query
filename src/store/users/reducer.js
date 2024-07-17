import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 1,
    currentUser: {}
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setCount: (state, {payload}) => {
            state.count = payload;
        },
        setCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
        },
    },
});

export const { setCount, setCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;