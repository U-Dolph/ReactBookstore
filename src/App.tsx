
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SharedLayout from './layouts/SharedLayout';
import LikedPage from './pages/LikedPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/favourites' element={<LikedPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
