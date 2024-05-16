import search from '../assets/icons/search.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResultsAsync } from '../state/books/booksSlice';
import { AppDispatch, RootState } from '../state/store';
import Card from './Card';

export default function FindYourBooksWrapper() {
  const searchRes = useSelector((state: RootState) => state.books.searchResults);
  console.log(searchRes);
  const dispatch = useDispatch<AppDispatch>();
  let timeout =  0;

  //onChange function to handle search input
  const handleSearch = (e) => {
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
      dispatch(fetchSearchResultsAsync({ query: query, page: 1 }));
    }, 300);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h4 className="text-3xl uppercase font-semibold text-amber-950">Find Your Books</h4>
        <div className="relative">
          <img src={search} alt="Search" className='w-4 absolute left-2 top-1/2 transform -translate-y-1/2 md:pb-2 mr-2'/>
          <input type="text" className="border-2 rounded-md border-amber-950 pl-6 text-xl text-right" onChange={handleSearch}/>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
      {searchRes.books ? (
          searchRes.books.map((book, id) => (
            <div className="flex-shrink-0 mr-2">
              <Card key={id} data={book}/>
            </div>
          ))
        ) : (
          <p>Start typing to search</p>
        )}
      </div>
    </div>
  )
}