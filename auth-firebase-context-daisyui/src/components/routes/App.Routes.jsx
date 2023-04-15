/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import DashBroad from '../pages/DashBroad';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/dashbroad',
                element: (
                    <PrivateRoutes>
                        {' '}
                        <DashBroad />
                    </PrivateRoutes>
                )
            }
        ]
    }
]);

export default router;
