/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default App;
