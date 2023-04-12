/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login';

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
                path: '/login',
                element: <Login />
            }
        ]
    }
]);
