/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/HomePages/Home';
import OurMenus from '../components/pages/OUR-MENU/OurMenus';
import OrderFood from '../components/pages/OUR-MENU/ORDERFOOD/OrderFood';

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
                path: 'order-food',
                element: <OrderFood />
            }
        ]
    }
]);
