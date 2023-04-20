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
                element: <LeftNavCategoriresData />
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
