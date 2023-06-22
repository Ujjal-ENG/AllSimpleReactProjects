/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100
    });

    useEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
        };

        if (!isLoading) {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen space-y-9">
                <h1 className="text-2xl font-bold text-center text-red-600">Hi There!!!</h1>
                <h3 className="text-xl font-bold text-center">Thank you for Visiting uplyrn Website</h3>
                <h4 className="text-4xl font-bold text-green-400 text-center">For Learn the New Things</h4>
            </div>
        );
    }
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
