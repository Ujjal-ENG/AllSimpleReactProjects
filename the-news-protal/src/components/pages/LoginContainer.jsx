/* eslint-disable react/jsx-indent */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/shared/Footer';
import Navbar from '../layouts/shared/Navbar';

function LoginContainer() {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-256px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default LoginContainer;
