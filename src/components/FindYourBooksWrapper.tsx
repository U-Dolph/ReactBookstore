import search from '../assets/icons/search.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResultsAsync, setPage, setQuery } from '../state/books/booksSlice';
import { AppDispatch, RootState } from '../state/store';
import Card from './Card';
import Paginator from './Paginator';
import { useState } from 'react';

export default function FindYourBooksWrapper() {
  const searchRes = useSelector((state: RootState) => state.books.searchResults);
  const queryString = useSelector((state: RootState) => state.books.queryString);
  const currentPage = useSelector((state: RootState) => state.books.currentPage);
  const dispatch = useDispatch<AppDispatch>();
  const [originalQuery, setOriginalQuery] = useState("");
  let timeout =  0;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let query = e.target.value;

    try {
      query = encodeURI(query);
    }
    catch (err) {
      console.error(err);
    }

    //User input debounce
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setOriginalQuery(e.target.value);
      document.title = e.target.value + " - Page " + currentPage;
      dispatch(setQuery(query));
      dispatch(setPage(1));
      dispatch(fetchSearchResultsAsync({ query: query, page: 1 }));
    }, 300);
  }

  const handlePageChange = (page: number) => {
    document.title = originalQuery + " - Page " + page;
    dispatch(setPage(page));
    dispatch(fetchSearchResultsAsync({ query: queryString, page: page }));
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h4 className="text-3xl uppercase font-semibold text-amber-950">Find Your Books</h4>
        <div className="relative">
          <img src={search} alt="Search" className='w-4 absolute left-2 top-1/2 transform -translate-y-1/2 md:pb-2 mr-2'/>
          <input type="text" className="border-2 rounded-md border-amber-950 pl-6 text-xl text-right" onChange={handleSearch}/>
        </div>
      </div>
        { searchRes.books && searchRes.books.length > 0 && queryString == "" && <p>Your previous search result</p> } 

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      { searchRes.books ? (
          searchRes.books.map((book, id) => (
            <div className="flex-shrink-0 mr-2 sm:justify-center sm:flex">
              <Card key={id} data={book}/>
            </div>
          ))
        ) : (
          <p>Start typing to search</p>
        )}
      </div>
      { searchRes.books && searchRes.books.length == 0 && queryString != "" && <p>No result found for {originalQuery}</p> }
    </div>
    {  searchRes.books && searchRes.books.length > 0 && queryString != "" && <Paginator page={currentPage} total={searchRes.total} setpage={handlePageChange}/> }
    </>
  )
}