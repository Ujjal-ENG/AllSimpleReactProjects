/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="h-[60vh] bg-blue-900 w-full flex justify-center items-start flex-col space-y-7 px-14">
            <h1 className="text-5xl font-bold text-white tracking-wider">A Lifetime of discounts? it's Genius.</h1>
            <p className="text-white font-bold text-xl tracking-wider">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
            <Link to="/login" type="button" className="btn border-none text-xl font-bold text-white bg-blue-700 px-5 hover:bg-black">
                Sign In / Register
            </Link>
        </div>
    );
};

export default Header;
