import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <>
            <Navbar />

            <Outlet />
            <Footer />
        </>
    );
};

export default App;
