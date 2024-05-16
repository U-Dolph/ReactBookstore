import { createSlice } from "@reduxjs/toolkit";

interface User {
    loggedIn: boolean;
    wishList: [];
}

const initialState: User = {
    loggedIn: JSON.parse(localStorage.getItem('loggedIn') || 'false'),
    wishList: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state: { loggedIn: boolean; }) {
            state.loggedIn = true;
            localStorage.setItem('loggedIn', JSON.stringify(true));
        },
        logout(state: { loggedIn: boolean; }) {
            state.loggedIn = false;
            localStorage.setItem('loggedIn', JSON.stringify(false));
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;