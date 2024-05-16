
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SharedLayout from './layouts/SharedLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
