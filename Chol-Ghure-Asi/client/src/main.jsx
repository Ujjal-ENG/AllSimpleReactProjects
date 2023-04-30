/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/App.Routes';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster />
        <RouterProvider router={router} />
    </>
);
