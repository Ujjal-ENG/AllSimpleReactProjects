/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import HotelAvaility from '../components/pages/SearchResultPages/HotelAvaility';
import SearchResult from '../components/pages/SearchResultPages/SearchResult';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/search-results',
                element: <SearchResult />
            },
            {
                path: 'search-hotel/:id',
                element: <HotelAvaility />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);
