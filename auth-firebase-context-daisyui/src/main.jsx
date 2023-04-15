/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import AuthProviders from './components/context-provider/AuthProviders';
import router from './components/routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
        <RouterProvider router={router} />
    </AuthProviders>
);
