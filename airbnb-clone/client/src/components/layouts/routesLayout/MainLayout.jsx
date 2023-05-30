import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedLayout/Footer';
import Navbar from '../sharedLayout/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
