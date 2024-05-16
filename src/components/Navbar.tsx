import profile from '../assets/icons/profile.svg'
import star from '../assets/icons/star.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { useState } from 'react';
import { logout } from '../state/user/userSlice';

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleLogout() {
    setDropdownOpen(false);
    dispatch(logout());
  }

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
        {loggedIn && <>
          <button>
            <img src={star} alt="Wishlist Button" className='h-6' />
          </button>
          <div className="relative flex items-center justify-center">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <img src={profile} alt="Profile Button" className='h-6' />
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
              </div>
            </div>
            )}
          </div>
        </>
        }
      </div>
    </div>
  )
}