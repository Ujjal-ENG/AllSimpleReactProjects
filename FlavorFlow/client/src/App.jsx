/* eslint-disable comma-dangle */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
        AOS.init({
            offset: 300,
            duration: 800,
            easing: 'ease-in-out',
            delay: 30,
            once: false,
            disable() {
                const maxWidth = 1024;
                return window.innerWidth < maxWidth;
            }
        });

        // Refresh AOS when an element enters the viewport
        const handleAOSIn = () => {
            AOS.refresh();
        };

        window.addEventListener('aos:in', handleAOSIn);

        return () => {
            window.removeEventListener('aos:in', handleAOSIn);
        };
    }, []);
    const queryClient = new QueryClient();
    return (
        <AuthProvider>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <div className="max-w-screen-2xl mx-auto">
                        {isLogin || isRegister || <Navbar />}

                        <Outlet />
                        <ScrollRestoration />
                        {isLogin || isRegister || <Footer />}
                    </div>
                </QueryClientProvider>
            </HelmetProvider>
        </AuthProvider>
    );
};

export default App;
