/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../pages/HomePage/Home';
import Product from '../pages/ProductPage/Product';
import Products from '../pages/ProductPage/Products';

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
                path: '/products/:id',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    }
]);
