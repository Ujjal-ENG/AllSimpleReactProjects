/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import Test from '../components/pages/Test';
import Testing from '../components/pages/Testing';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Test />
            },
            {
                path: 'test',
                element: <Testing />
            }
        ]
    }
]);
