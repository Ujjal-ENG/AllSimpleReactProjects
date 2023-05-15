import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
