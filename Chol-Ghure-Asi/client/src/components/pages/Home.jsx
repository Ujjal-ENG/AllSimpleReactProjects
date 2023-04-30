/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BackgroundVideo from '../../assets/video/video.mp4';
import Navbar from '../layouts/Navbar';
import LeftSide from './LeftSide';
import Slider from './Slider';

function Home() {
    const [travelData, setTravelData] = useState([]);
    const [backgroudImage, setBackgrondImage] = useState({});
    const [isImageBg, setIsImgBg] = useState(false);
    // get travel data
    const getTravelData = async () => {
        const { data } = await axios.get('http://localhost:8080/all-travel-data');
        if (data.success) {
            setTravelData(data.data.data);
        }
    };
    const getData = (id) => {
        const findData = travelData.find((el) => el.id === id);
        setBackgrondImage(findData);
        setIsImgBg(true);
    };
    useEffect(() => {
        getTravelData();
    }, []);
    console.log(backgroudImage.image);
    return (
        <div>
            {isImageBg ? (
                <div className=" fixed top-0 left-0 w-full h-full bg-cover bg-center z-0 duration-200 transition-all ease-in" style={{ backgroundImage: `url(${backgroudImage.image})` }} />
            ) : (
                <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" />
            <div className="relative z-10">
                <Navbar />

                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-3">
                        <LeftSide />
                    </div>
                    <div className="col-span-9 ml-24">
                        <Slider data={travelData} getData={getData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
