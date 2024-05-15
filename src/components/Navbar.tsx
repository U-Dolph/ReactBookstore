import profile from '../assets/icons/profile.svg'
import star from '../assets/icons/star.svg'

export default function Navbar() {
  return (
      <div className="grid grid-cols-3 items-center px-2 mt-2">
        <div className="flex items-center text-5xl font-bold">
          Library
        </div>

        <div className="flex justify-center flex-1 font-semibold">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-orange-500">Homes</a></li>
            <li><a href="#" className="hover:text-orange-500">Features</a></li>
            <li><a href="#" className="hover:text-orange-500">Pages</a></li>
            <li><a href="#" className="hover:text-orange-500">Shop</a></li>
            <li><a href="#" className="hover:text-orange-500">Event</a></li>
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
          </ul>
        </div>

        <div className='flex space-x-2 justify-end'>
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
