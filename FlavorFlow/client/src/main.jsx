/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import './index.css';
import { router } from './routes/App.Routes';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <Toaster />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </HelmetProvider>
    </AuthProvider>
);
