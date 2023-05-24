import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <HelmetProvider>
                <div className="max-w-screen-2xl mx-auto">
                    <Navbar />
                    <Outlet />
                    <ScrollRestoration />
                    <Footer />
                </div>
            </HelmetProvider>
        </AuthProvider>
    );
};

export default App;
