/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home';
import Test from '../components/pages/Test';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/test',
                        element: <Test />
                    }
                ]
            }
        ]
    }
]);
