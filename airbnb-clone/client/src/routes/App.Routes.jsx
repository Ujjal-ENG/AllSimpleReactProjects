/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/routesLayout/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    }
]);
