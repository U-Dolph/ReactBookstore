import profile from '../assets/icons/profile.svg'
import star from '../assets/icons/star.svg'

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center mt-2">
      <div className="flex items-center text-5xl font-bold w-full justify-center sm:justify-start">
        Library
      </div>

      <div className="flex justify-center flex-1 font-semibold">
        <ul className="flex sm:space-x-4 sm:gap-4 sm:space-x-0 flex-col sm:flex-row sm:items-center">
          <li className="text-center"><a href="#" className="hover:text-orange-500">Homes</a></li>
          <li className="text-center"><a href="#" className="hover:text-orange-500">Features</a></li>
          <li className="text-center"><a href="#" className="hover:text-orange-500">Pages</a></li>
          <li className="text-center"><a href="#" className="hover:text-orange-500">Shop</a></li>
          <li className="text-center"><a href="#" className="hover:text-orange-500">Event</a></li>
          <li className="text-center"><a href="#" className="hover:text-orange-500">Blog</a></li>
        </ul>
      </div>

      <div className='flex space-x-2 justify-center sm:justify-end w-full'>
        <button>
          <img src={star} alt="Profile Button" className='h-6' />
        </button>
        <button>
          <img src={profile} alt="Profile Button" className='h-6' />
        </button>
      </div>
    </div>
  )
}