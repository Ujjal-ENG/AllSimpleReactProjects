/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ToggleColorMode from './context/DarkModeProvider';
import './index.css';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ToggleColorMode>
        <RouterProvider router={router} />
    </ToggleColorMode>
);
