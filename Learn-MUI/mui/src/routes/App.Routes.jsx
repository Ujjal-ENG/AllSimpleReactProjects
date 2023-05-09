/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/pages/About';
import Home from '../components/pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
]);
