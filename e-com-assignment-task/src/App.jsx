/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100
    });
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
