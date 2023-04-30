/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home';
import SingleBooking from '../components/pages/SingleBooking';

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
                element: <SingleBooking />,
                loader: async ({ params }) => fetch(`http://localhost:8080/single-booking/${params.id}`)
            }
        ]
    }
]);
