
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<HomePage />} />)
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
