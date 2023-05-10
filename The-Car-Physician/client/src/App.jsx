import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
};

export default App;
