/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '../components/pages/Blog';
import Destination from '../components/pages/Destination';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import RegisterPage from '../components/pages/RegisterPage';
import Search from '../components/pages/Search';
import SingleBooking from '../components/pages/SingleBooking';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/single-booking/:id',
                element: (
                    <PrivateRoutes>
                        <SingleBooking />,
                    </PrivateRoutes>
                ),
                loader: async ({ params }) => fetch(`https://chol-ghure-asi.vercel.app/single-booking/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/search',
                element: (
                    <PrivateRoutes>
                        <Search />
                    </PrivateRoutes>
                ),
                loader: async () => fetch('https://chol-ghure-asi.vercel.app/search-room/')
            },
            {
                path: '/travel-blog',
                element: <Blog />
            },
            {
                path: '/travel-destination',
                element: <Destination />
            }
        ]
    }
]);
