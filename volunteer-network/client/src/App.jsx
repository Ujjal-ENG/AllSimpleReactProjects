import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default App;
