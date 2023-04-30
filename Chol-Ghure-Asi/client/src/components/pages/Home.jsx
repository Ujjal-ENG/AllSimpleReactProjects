/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../../assets/video/video.mp4';
import Navbar from '../layouts/Navbar';
import LeftSide from './LeftSide';
import Slider from './Slider';

function Home() {
    const [travelData, setTravelData] = useState([]);

    // get travel data
    const getTravelData = async () => {
        const { data } = await axios.get('http://localhost:8080/all-travel-data');
        if (data.success) {
            setTravelData(data.data.data);
        }
    };

    useEffect(() => {
        getTravelData();
    }, []);

    return (
        <div>
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" />
            <div className="relative z-10">
                <Navbar />

                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-3">
                        <LeftSide />
                    </div>
                    <div className="col-span-9 ml-24">
                        <Slider data={travelData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
