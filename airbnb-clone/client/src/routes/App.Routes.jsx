/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/routesLayout/MainLayout';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login&registration/Login';
import Register from '../components/pages/Login&registration/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Register />
    }
]);
