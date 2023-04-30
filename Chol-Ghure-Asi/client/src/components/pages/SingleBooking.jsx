/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import LeftSide from './LeftSide';

function SingleBooking() {
    const loader = useLoaderData();

    return (
        <div>
            <div className=" fixed top-0 left-0 w-full h-full bg-cover bg-center z-0 duration-200 transition-all ease-in" style={{ backgroundImage: `url(${loader.findData.image})` }} />

            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" />
            <div className="relative z-10">
                <Navbar />

                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-3">
                        <LeftSide data={loader.findData} id={loader.findData.id} />
                    </div>
                    <div className="col-span-9 ml-24">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBooking;
