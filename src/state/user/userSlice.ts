import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Book } from "../books/booksSlice";

interface User {
    loggedIn: boolean;
    likedBooks: Book[];
}

const initialState: User = {
    loggedIn: JSON.parse(localStorage.getItem('loggedIn') || 'false'),
    likedBooks: JSON.parse(localStorage.getItem('likedBooks') || '[]'),
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
        },
        addToLikedList(state, action: PayloadAction<Book>) {
            if (!state.loggedIn) return;
            if (state.likedBooks.some(likedBook => likedBook.isbn13 === action.payload.isbn13)) return;
            state.likedBooks.push(action.payload);
            localStorage.setItem('likedBooks', JSON.stringify(state.likedBooks));
        },
        removeFromLikedList(state, action: PayloadAction<Book>) {
            if (!state.loggedIn) return;
            state.likedBooks = state.likedBooks.filter(book => book !== action.payload);
            localStorage.setItem('likedBooks', JSON.stringify(state.likedBooks));
        }
    }
});

export const { login, logout, addToLikedList, removeFromLikedList } = userSlice.actions;
export default userSlice.reducer;