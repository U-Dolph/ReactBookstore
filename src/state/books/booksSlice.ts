import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PAGE_SIZE, REQUESTED_PAGE_SIZE } from "../../globals";

interface ResponseResult {
  error: string;
  total: number;
  page: number;
  books: Book[];
}

interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
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
        state.searchResults = { ...action.payload };
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
    return await fetchBooks(query, page);
  }
);

const fetchBooks = async (query: string, page: number) => {
  const books = [];
  let errorCode = "0";
  let total = 0;
  const startPage = Math.floor((page - 1) * REQUESTED_PAGE_SIZE / API_PAGE_SIZE + 1);
  const endPage = Math.ceil(page * REQUESTED_PAGE_SIZE / API_PAGE_SIZE);

  for (let i = startPage; i <= endPage; i++) {
    const response = await fetch(`https://api.itbook.store/1.0/search/${query}?page=${i}`);
    const data = await response.json();
    books.push(...data.books);

    if (data.error != "0")
      errorCode = data.error;
    
    if (total === 0)
      total = data.total;
  }

  const startIndex = ((page - 1) * REQUESTED_PAGE_SIZE) % API_PAGE_SIZE;
  const resultBooks = books.slice(startIndex, startIndex + REQUESTED_PAGE_SIZE);

  return {
    error: errorCode,
    total: total,
    page: page,
    books: resultBooks
  } as ResponseResult;
};

export default booksSlice.reducer;
export const { setPage, setQuery } = booksSlice.actions;
export type { Book };