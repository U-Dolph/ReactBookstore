import AccentDecorator from '../components/AccentDecorator'
import Banner from '../components/Banner'
import FindYourBooksWrapper from '../components/FindYourBooksWrapper'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NewReleasesWrapper from '../components/NewReleasesWrapper'

export default function HomePage() {
    return (
        <>
            <AccentDecorator css="bg-orange-500">
                <Header />
            </AccentDecorator>
            <Navbar />
            <Banner />
            <NewReleasesWrapper />
            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 border my-8 border-gray-200"></div>
            <FindYourBooksWrapper />
            <AccentDecorator css="bg-orange-500 mt-8">
                <div className='h-8'></div>
            </AccentDecorator>
        </>
    )
  
}
