/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import DestinationCard from './DestinationCard';

function Destination() {
    const { destination } = useLoaderData();

    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>
            <h1 className="hover-stroke text-6xl w-full font-bold" data-text="Top Destination">
                Top Destination
            </h1>
            {destination && destination?.map((el, idx) => <DestinationCard key={idx} data={el} />)}
        </div>
    );
}

export default Destination;
