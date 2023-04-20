/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import LoginPage from '../pages/Login&Register/LoginPage';
import RegisterPage from '../pages/Login&Register/RegisterPage';
import News from '../pages/NewsContainer/News';
import NewsContainer from '../pages/NewsContainer/NewsContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LeftNavCategoriresData />,
                loader: async () => fetch('http://localhost:3000/all-news')
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
                element: <News />,
                loader: async ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register-page',
        element: <RegisterPage />
    }
]);

export default router;
