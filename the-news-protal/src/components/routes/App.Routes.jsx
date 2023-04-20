/* eslint-disable comma-dangle */
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import LoginPage from '../pages/Login&Register/LoginPage';
import RegisterPage from '../pages/Login&Register/RegisterPage';
import LoginContainer from '../pages/LoginContainer';
import News from '../pages/NewsContainer/News';
import NewsContainer from '../pages/NewsContainer/NewsContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginContainer />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category" />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register-page',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: 'category',
        element: <App />,
        children: [
            {
                path: '/category',
                element: <LeftNavCategoriresData />,
                loader: async () => fetch('http://localhost:3000/all-news')
            },
            {
                path: ':id',
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
    }
]);

export default router;
