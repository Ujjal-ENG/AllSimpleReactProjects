import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { cartProductsLoader } from '../../loaders/cartProductsLoaders';
import ErrorPage from '../pages/ErrorPage';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import OrderReview from '../pages/OrderReview';
import RegisterUser from '../pages/RegisterUser';
import Shop from '../pages/Shop';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/order-review',
                element: <OrderReview />,
                loader: cartProductsLoader
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/register-user',
                element: <RegisterUser />
            }
        ]
    }
]);