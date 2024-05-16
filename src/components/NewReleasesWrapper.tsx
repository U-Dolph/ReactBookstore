import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleasesAsync } from '../state/books/booksSlice';
import Card from "./Card";
import { AppDispatch, RootState } from '../state/store';

export default function NewReleasesWrapper() {
  const newReleases = useSelector((state: RootState) => state.books.newReleases);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNewReleasesAsync());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-2">
      <h4 className="text-3xl uppercase font-semibold text-amber-950">New releases</h4>

      <div className="flex overflow-x-auto mt-4 gap-8">
        {newReleases && newReleases.length > 0 ? (
          newReleases.map((book, id) => (
            <div className="flex-shrink-0 mr-2">
              <Card key={id} data={book}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
