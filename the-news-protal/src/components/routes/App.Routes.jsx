/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/Login&Register/LoginPage';
import RegisterPage from '../pages/Login&Register/RegisterPage';
import LoginContainer from '../pages/LoginContainer';
import News from '../pages/NewsContainer/News';
import NewsContainer from '../pages/NewsContainer/NewsContainer';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginContainer />,
        errorElement: <ErrorPage />,
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
                loader: async () => fetch('https://the-news-protal.onrender.com/all-news')
            },
            {
                path: ':id',
                element: <LeftNavCategoriresData />,
                loader: async ({ params }) => fetch(`https://the-news-protal.onrender.com/category/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <NewsContainer />,
        children: [
            {
                path: 'news/:id',
                element: (
                    <PrivateRoutes>
                        {' '}
                        <News />,
                    </PrivateRoutes>
                ),
                loader: async ({ params }) => fetch(`https://the-news-protal.onrender.com/news/${params.id}`)
            }
        ]
    }
]);

export default router;
