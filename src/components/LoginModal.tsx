import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "../state/user/userSlice";
import { AppDispatch } from "../state/store";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function LoginModal({ show, onClose }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  if (!show) {
    return null;
  }

  const fakeAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      setError('');
      dispatch(login())
      onClose();
    } else {
      setError('Invalid username or password');
    }
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-auto overflow-auto" onClick={e => e.stopPropagation()}>
        <form onSubmit={fakeAuth}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border border-gray-300 rounded mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded mb-4" />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );

}
