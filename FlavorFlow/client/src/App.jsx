import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');
    const isRegister = location.pathname.includes('/register');
    useEffect(() => {
        // ..
        AOS.init();
    }, []);
    return (
        <AuthProvider>
            <HelmetProvider>
                <div className="max-w-screen-2xl mx-auto">
                    {isLogin || isRegister || <Navbar />}

                    <Outlet />
                    <ScrollRestoration />
                    {isLogin || isRegister || <Footer />}
                </div>
            </HelmetProvider>
        </AuthProvider>
    );
};

export default App;
