/* eslint-disable react/jsx-indent */
import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

function Sidebar() {
    return (
        <div className="basis-1/3 border-r-2 ">
            <Navbar />
            <Search />
        </div>
    );
}

export default Sidebar;
