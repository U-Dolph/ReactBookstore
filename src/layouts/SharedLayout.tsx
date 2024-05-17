import { Outlet } from 'react-router-dom';
import AccentDecorator from '../components/AccentDecorator'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function SharedLayout() {
  return (
<div className="flex flex-col min-h-screen justify-between">
      <div>
        <AccentDecorator css="bg-orange-500">
          <Header />
        </AccentDecorator>
        <Navbar />
        <Banner />
        <Outlet />
      </div>

      <AccentDecorator css="bg-orange-500 mt-8">
        <div className='h-8'></div>
      </AccentDecorator>
    </div>
  );
}
