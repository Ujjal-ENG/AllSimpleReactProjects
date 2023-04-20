/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import moment from 'moment';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Logo from '../../assets/logo.png';
import Navbar from '../layouts/shared/Navbar';

function Header() {
    return (
        <div className="">
            <img src={Logo} alt="logo" className="mx-auto object-cover pt-8 pb-4" />
            <p className="text-gray-400 font-semibold text-center">
                <small className="tracking-widest text-xl">Journalism Without Fear or Favour</small>
            </p>
            <p className="text-gray-500 font-semibold text-center tracking-wider text-xl">{moment().format('dddd, MMMM Do YYYY')}</p>

            <div className="alert shadow-lg max-w-7xl mx-auto my-5">
                <div className="flex-none">
                    <button className="btn btn-md btn-ghost text-white font-bold hover:text-gray-700 bg-red-500">Latest News</button>
                </div>
                <Marquee speed={50} className="text-2xl tracking-wide text-violet-600 font-bold">
                    Today in Bangladesh, some issues in fire. Because this issues now over warming because of many firing happened before the Eid, which is the festival of Bangladeshi Muslims peoples.
                </Marquee>
            </div>

            {/* Navbar */}
            <Navbar />
        </div>
    );
}

export default Header;
