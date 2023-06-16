/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const Header = () => {
    return (
        <div className="h-[60vh] bg-blue-900 w-full flex justify-center items-start flex-col space-y-7 px-14">
            <h1 className="text-5xl font-bold text-white tracking-wider">A Lifetime of discounts? it's Genius.</h1>
            <p className="text-white font-bold text-xl tracking-wider">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
            <button type="button" className="btn border-none text-xl font-bold text-white bg-blue-700 px-5">
                Sign In / Register
            </button>
        </div>
    );
};

export default Header;
