import padlock from '../assets/icons/padlock.svg';
import twitter from '../assets/icons/twitter.svg';
import fb from '../assets/icons/fb.svg';
import instagram from '../assets/icons/instagram.svg';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-end space-x-2">
        <button className="p-1 flex flex-row items-center">
          {/* Does nothing */}
          <img src={instagram} className='w-4 text-white' alt="Instagram Button" />
        </button>
        <button className="p-1 flex flex-row items-center">
          {/* Does nothing */}
          <img src={fb} className='w-4 text-white' alt="Facebook Button" />
        </button>
        <button className="p-1 flex flex-row items-center">
          {/* Does nothing */}
          <img src={twitter} className='w-4 text-white' alt="Twitter Button" />
        </button>
        <button className="bg-white px-3 py-1 flex flex-row items-center uppercase" onClick={() => setShowLogin(!showLogin && !loggedIn)}>
          {loggedIn ? <span className="mr-2">Welcome, User</span> :
            <>
              <img src={padlock} className='w-4' alt="Login Button" />
              <span>Login</span>
            </>
          }
        </button>
      </div>
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}