/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
    </div>
);
