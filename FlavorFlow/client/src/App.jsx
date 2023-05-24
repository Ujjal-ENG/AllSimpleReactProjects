import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');
    return (
        <HelmetProvider>
            <div className="max-w-screen-2xl mx-auto">
                {isLogin || <Navbar />}
                <Outlet />
                <ScrollRestoration />
                {isLogin || <Footer />}
            </div>
        </HelmetProvider>
    );
};

export default App;
