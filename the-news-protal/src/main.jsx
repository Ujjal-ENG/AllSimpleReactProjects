/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './components/routes/App.Routes';
import AuthProvide from './context/AuthProvide';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvide>
        <RouterProvider router={router} />
    </AuthProvide>
);
