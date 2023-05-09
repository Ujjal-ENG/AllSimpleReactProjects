/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddToCoffe from '../components/pages/ButtonPage/AddToCoffe';
import CoffeeDeatils from '../components/pages/ButtonPage/CoffeeDeatils';
import UpdateCoffeDetails from '../components/pages/ButtonPage/UpdateCoffeDetails.jsx';
import Home from '../components/pages/Home';

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
                path: 'add-coffee',
                element: <AddToCoffe />
            },
            {
                path: 'update-coffee/:id',
                element: <UpdateCoffeDetails />,
                loader: async ({ params }) => fetch(`https://backend-blond-phi.vercel.app/get-coffees/${params.id}`)
            },
            {
                path: 'view-coffee/:id',
                element: <CoffeeDeatils />,
                loader: async ({ params }) => fetch(`https://backend-blond-phi.vercel.app/get-coffees/${params.id}`)
            }
        ]
    }
]);
