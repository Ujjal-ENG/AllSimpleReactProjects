/* eslint-disable react/jsx-indent */
import React from 'react';
import Chat from './ChatPages/Chat';
import Sidebar from './ChatPages/Sidebar';

function Home() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="border-2 border-blue-500 h-5/6 w-4/6 rounded-md flex">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home;
