import './App.css'
import Banner from './components/Banner'
import FindYourBooksWrapper from './components/FindYourBooksWrapper'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NewReleasesWrapper from './components/NewReleasesWrapper'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <NewReleasesWrapper />
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 border my-8 border-gray-200"></div>
      <FindYourBooksWrapper />
    </>
  )
}

export default App
