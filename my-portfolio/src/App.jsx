/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
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

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen space-y-9">
                <h1 className="text-2xl font-bold text-center text-red-600">Hi There!!!</h1>
                <h3 className="text-xl font-bold text-center">Thank you for Visiting my Portfolio Website</h3>
                <h4 className="text-4xl font-bold text-green-400 text-center">I am Ujjal Kumar Roy</h4>
            </div>
        );
    }
    return (
        <>
            <div className="font-titleFont ">
                <Navbar />
            </div>

            <Outlet />
        </>
    );
};

export default App;
