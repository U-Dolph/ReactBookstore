import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ResponseResult {
  error: string;
  total: number;
  books: Book[];
}

interface Book {
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

interface SearchResult {
  books: Book[];
  total: number;
  page: number;
}

interface BooksState {
  newReleases: Book[];
  searchResults: SearchResult[];
}

const initialState: BooksState = {
  newReleases: JSON.parse(localStorage.getItem('newReleases') || '[]'),
  searchResults: JSON.parse(localStorage.getItem('searchResults') || '[]'),
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewReleasesAsync.fulfilled, (state, action: PayloadAction<ResponseResult>) => {
        if (action.payload.error != "0") {
          return;
        }
        state.newReleases = action.payload.books;
        localStorage.setItem('newReleases', JSON.stringify(action.payload.books));
      });
  },
});

export const fetchNewReleasesAsync = createAsyncThunk(
  "books/fetchNewReleasesAsync",
  async () => {
    const response = await fetch("https://api.itbook.store/1.0/new");
    return response.json();
  }
);

export default booksSlice.reducer;
export type { Book };