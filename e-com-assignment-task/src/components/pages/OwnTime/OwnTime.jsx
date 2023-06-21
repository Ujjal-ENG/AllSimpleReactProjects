/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';

const OwnTime = () => {
    return (
        <div data-aos="fade-up" className="flex md:flex-row  flex-col justify-evenly items-center px-32 my-20">
            <div>
                <h1 className="text-2xl md:text-5xl tracking-wider  pb-4 font-bold text-black">Learn At Your Own Time</h1>
                <div className="h-2 max-w-md w-full py-1  bg-[#3D96F7] rounded-full my-4" />
                <p className="text-xl font-semibold tracking-wide w-full md:w-3/4  pb-8 text-black">
                    Everyone has their personal sweet spot when it comes to learning. With Uplyrn, you can choose to learn at any time, anywhere. But maybe not on a first date!
                </p>
            </div>
            <div className="md:-mt-32 -mt-0 z-10">
                <img src="https://uplyrn.com/images/webpimg/LearnAtYourOwnTime.webp" alt="photo" />
            </div>
        </div>
    );
};

export default OwnTime;
