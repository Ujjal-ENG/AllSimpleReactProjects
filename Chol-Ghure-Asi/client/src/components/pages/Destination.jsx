/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

function Destination() {
    const loader = useLoaderData();
    console.log(loader.roomData);
    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>
            <h1 className="hover-stroke text-6xl w-full font-bold" data-text="Top Destination">
                Top Destination
            </h1>
        </div>
    );
}

export default Destination;
