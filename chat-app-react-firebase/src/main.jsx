/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './components/context-providers/AuthProviders';
import router from './components/routes/App.Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>
);
