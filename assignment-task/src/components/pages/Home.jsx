import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Home = () => {
    return (
        <div className="grid grid-cols-9">
            <SideBar />
            <div className="col-span-7">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
