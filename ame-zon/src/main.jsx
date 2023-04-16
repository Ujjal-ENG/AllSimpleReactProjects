/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { router } from './components/routes/App.routes';
import AuthProviders from './context/AuthProviders';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProviders>
        <Toaster />
        <RouterProvider router={router} />
    </AuthProviders>
);
