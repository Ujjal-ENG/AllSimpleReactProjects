import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer />
        </AuthProvider>
    );
};

export default App;
