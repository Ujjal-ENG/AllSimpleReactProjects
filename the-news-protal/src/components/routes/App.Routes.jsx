/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import Home from '../pages/Home';
import News from '../pages/NewsContainer/News';
import NewsContainer from '../pages/NewsContainer/NewsContainer';

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
    },
    {
        path: '/',
        element: <NewsContainer />,
        children: [
            {
                path: 'news/:id',
                element: <News />
            }
        ]
    }
]);

export default router;
