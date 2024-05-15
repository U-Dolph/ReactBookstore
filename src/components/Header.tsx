import padlock from '../assets/icons/padlock.svg';
import twitter from '../assets/icons/twitter.svg';
import fb from '../assets/icons/fb.svg';
import instagram from '../assets/icons/instagram.svg';

export default function Header() {
  return (
    <div className="bg-orange-500 flex flex-row justify-end space-x-2 px-2">
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
      <button className="bg-white px-3 py-1 flex flex-row items-center uppercase">
        {/* TODO: Add login modal */}
        <img src={padlock} className='w-4' alt="Login Button" />
        Login
      </button>
    </div>
  )
}
