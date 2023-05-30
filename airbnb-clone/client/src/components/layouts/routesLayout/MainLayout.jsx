import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharedLayout/Footer';
import Navbar from '../sharedLayout/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
