/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import CheckBookingDetails from '../components/pages/CheckBookingDetails/CheckBookingDetails';
import CheckOut from '../components/pages/Chekout/CheckOut';
import Home from '../components/pages/HomePages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import ServiceDetails from '../components/pages/serviceDetails/ServiceDetails';
import AuthProvider from '../context/AuthProvider';
import PrivateRoute from './PrivateRoute';

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
                path: 'service-details/:id',
                element: <ServiceDetails />
            },
            {
                path: 'checkout/:id',
                element: (
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => fetch(`https://the-car-physician-server.vercel.app/single-services/${params.id}`)
            },
            {
                path: 'check-booking-details',
                element: (
                    <PrivateRoute>
                        <CheckBookingDetails />
                    </PrivateRoute>
                )
            }
        ]
    },
    {
        path: 'login',
        element: (
            <AuthProvider>
                <Login />
            </AuthProvider>
        )
    },
    {
        path: '/register',
        element: (
            <AuthProvider>
                {' '}
                <Register />
            </AuthProvider>
        )
    }
]);
