/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/HomePages/Home';
import Login from '../components/pages/Login&Register/Login';
import OrderFood from '../components/pages/OUR-MENU/ORDERFOOD/OrderFood';
import OurMenus from '../components/pages/OUR-MENU/OurMenus';

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
                path: 'our-menu',
                element: <OurMenus />
            },
            {
                path: 'order-food/:category',
                element: <OrderFood />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);
