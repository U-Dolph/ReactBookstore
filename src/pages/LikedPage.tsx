import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import Card from '../components/Card';
import { Book } from '../state/books/booksSlice';
import { removeFromLikedList } from '../state/user/userSlice';
import { useEffect } from 'react';

export default function LikedPage() {
  const likedBooks = useSelector((state: RootState) => state.user.likedBooks);
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    document.title = "Your favourite books";
  });

  const handleBookClick = (book: Book) => {
    dispatch(removeFromLikedList(book));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
      <h4 className="text-3xl uppercase font-semibold text-amber-950">Your favourite books</h4>
      {!loggedIn && <span>To see your favourite books, you need to first log in!</span>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {likedBooks.length === 0 && loggedIn && <p>No favourite books yet</p>}
        {likedBooks && loggedIn && (
          likedBooks.map((book) => (
            <div className="flex-shrink-0 mr-2 justify-center flex hover:cursor-pointer" onClick={() => handleBookClick(book)}>
              <Card key={book.isbn13} details={book} liked={false} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
