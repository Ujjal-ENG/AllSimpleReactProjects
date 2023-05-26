/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
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
    return (
        <>
            <div className="font-titleFont ">
                <Navbar />
            </div>

            <Outlet />
            <Footer />
        </>
    );
};

export default App;
