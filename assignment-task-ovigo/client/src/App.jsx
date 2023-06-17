/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
