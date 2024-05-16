import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book, fetchNewReleasesAsync } from '../state/books/booksSlice';
import Card from "./Card";
import { AppDispatch, RootState } from '../state/store';
import { addToLikedList } from '../state/user/userSlice';

export default function NewReleasesWrapper() {
  const newReleases = useSelector((state: RootState) => state.books.newReleases);
  const likedBooks = useSelector((state: RootState) => state.user.likedBooks);
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNewReleasesAsync());
  }, [dispatch]);

  const handleBookClick = (book: Book) => {
    if (!loggedIn) {
      alert("Please login to add to favorites");
      return;
    }
    dispatch(addToLikedList(book));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-2">
      <h4 className="text-3xl uppercase font-semibold text-amber-950">New releases</h4>

      <div className="flex overflow-x-auto mt-4 gap-8">
        {newReleases && newReleases.length > 0 ? (
          newReleases.map((book) => (
            <div className="flex-shrink-0 mr-2 hover:cursor-pointer" onClick={() => handleBookClick(book)}>
              <Card key={book.isbn13} details={book} liked={likedBooks.some(likedBook => likedBook.isbn13 === book.isbn13) && loggedIn} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
