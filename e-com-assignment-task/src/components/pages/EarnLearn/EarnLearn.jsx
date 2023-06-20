/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';

const EarnLearn = () => {
    return (
        <div data-aos="fade-down" className="flex justify-evenly items-center px-40">
            <div>
                <h1 className="text-5xl tracking-wider  pb-4 font-bold text-black">Earn As You Learn</h1>
                <div className="h-2 max-w-md w-full py-1  bg-[#3D96F7] rounded-full my-4" />
                <p className="text-xl font-semibold tracking-wide w-3/4  pb-8 text-black">
                    Earn 25% commission when your network purchase Uplyrn courses or subscribe to our annual membership. It’s the best thing ever. Next to learning, of course.
                </p>
                <button type="button" className="btn text-xl font-bold tracking-wider px-8 text-white hover:bg-black bg-[#3D96F7] border-none">
                    Tell me more
                </button>
            </div>
            <div className="px-20 rounded-2xl shadow-2xl">
                <img src="https://uplyrn.com/images/webpimg/EarnAsYouLearn.webp" alt="photo" className="" />
            </div>
        </div>
    );
};

export default EarnLearn;
