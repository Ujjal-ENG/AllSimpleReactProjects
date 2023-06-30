/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/shared/Footer';

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        });
    }, []);

    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

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
    // company Logo
    // company tag line
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen space-y-9">
                <h1 className="text-2xl font-bold text-center text-red-600">Hi There!!!</h1>
                <h3 className="text-xl font-bold text-center">WelCome to our Photography world</h3>
                <h4 className="text-4xl font-bold text-green-400 text-center">Thank you for Visiting the FliqaIndia... A Photography world...</h4>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
