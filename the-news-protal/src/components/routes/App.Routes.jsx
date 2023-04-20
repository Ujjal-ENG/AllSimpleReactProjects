/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import Home from '../pages/Home';

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
                path: '/category/:id',
                element: <LeftNavCategoriresData />,
                loader: async ({ params }) => fetch(`http://localhost:3000/category/${params.id}`)
            }
        ]
    }
    // {
    //     path: '/',
    //     element: <NewsContainer />,
    //     children: [
    //         {
    //             path: '/category/:id',
    //             element: <LeftNavCategoriresData />
    //         }
    //     ]
    // }
]);

export default router;
