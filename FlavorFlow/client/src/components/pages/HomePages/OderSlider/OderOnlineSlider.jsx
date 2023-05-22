import React from 'react';
import Slider from './Slider';

const OderOnlineSlider = () => {
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50 max-w-xs mx-auto">
                <h5 className="-mb-4 text-yellow-500 font-semibold text-center mt-24"> --From 11:00am to 10:00pm--</h5>
                <div className="divider" />
                <h1 className="text-center text-4xl font-bold">Order Online</h1>

                <div className="divider rounded-xl" />
            </div>
            <div className=" py-14">
                <Slider />
            </div>
        </div>
    );
};

export default OderOnlineSlider;
