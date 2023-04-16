/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './components/routes/App.routes';
import AuthProviders from './context/AuthProviders';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>
);
