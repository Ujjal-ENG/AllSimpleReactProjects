/* eslint-disable react/jsx-indent */
import React from 'react';
import BackgroundVideo from '../../assets/video/video.mp4';
import Navbar from '../layouts/Navbar';

function Home() {
    return (
        <div>
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" />
            <div className="relative z-10">
                <Navbar />
            </div>
        </div>
    );
}

export default Home;
