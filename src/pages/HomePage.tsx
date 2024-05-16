import FindYourBooksWrapper from '../components/FindYourBooksWrapper'
import NewReleasesWrapper from '../components/NewReleasesWrapper'

export default function HomePage() {
  return (
    <>
      <NewReleasesWrapper />
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 border my-8 border-gray-200"></div>
      <FindYourBooksWrapper />
    </>
  );
}
