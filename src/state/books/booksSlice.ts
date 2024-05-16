import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ResponseResult {
  error: string;
  total: number;
  page: number;
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
}

interface BooksState {
  newReleases: Book[];
  searchResults: SearchResult;
  queryString: string;
  currentPage: number;
}

const initialState: BooksState = {
  newReleases: JSON.parse(localStorage.getItem('newReleases') || '[]'),
  searchResults: JSON.parse(localStorage.getItem('searchResults') || '[]'),
  queryString: '',
  currentPage: 1
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.queryString = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewReleasesAsync.fulfilled, (state, action: PayloadAction<ResponseResult>) => {
        if (action.payload.error != "0") {
          return;
        }
        state.newReleases = action.payload.books;
        localStorage.setItem('newReleases', JSON.stringify(action.payload.books));
      })
      .addCase(fetchSearchResultsAsync.fulfilled, (state, action: PayloadAction<ResponseResult>) => {
        if (action.payload.error != "0") {
          return;
        }
        state.searchResults = {...action.payload};
        localStorage.setItem('searchResults', JSON.stringify(action.payload));
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

export const fetchSearchResultsAsync = createAsyncThunk(
  "books/fetchSearchResultsAsync",
  async ({ query, page }: { query: string, page: number }) => {
    const response = await fetch(`https://api.itbook.store/1.0/search/${query}?page=${page}`);
    return response.json();
  }
);

export default booksSlice.reducer;
export const { setPage, setQuery } = booksSlice.actions;
export type { Book };