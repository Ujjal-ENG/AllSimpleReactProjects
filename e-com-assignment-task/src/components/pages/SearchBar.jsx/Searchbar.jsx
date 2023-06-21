/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { BiSearchAlt2 } from 'react-icons/bi';
import './search.css';

const Searchbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 70 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);
    return (
        <>
            <Headroom>
                <div className="headroom headroom--unpinned headroom-disable-animation ">
                    <div className="max-w-[1400px]  z-50 px-14 py-5 mx-auto bg-white  duration-150 transition-all ease-in-out hover:border-orange-400 hover:border-4 border-2 rounded-md  flex w-full justify-between items-center shadow-2xl">
                        <div className="mt-2.5 relative  w-full text-gray-400 focus-within:text-gray-600 max-w-5xl">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BiSearchAlt2 size={24} />
                            </div>
                            <input
                                placeholder="Up for some learning and growing today?"
                                className="block font-bold w-full  py-4 pl-10  text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline focus:border-blue-600 focus:bg-white caret-blue-600"
                            />
                        </div>

                        <button type="button" className="btn btn-ghost px-10 hover:bg-blue-600 bg-gray-600 text-white text-2xl font-bold tracking-wider">
                            Search
                        </button>
                    </div>
                </div>
            </Headroom>
            {!isScrolled && (
                <div className="max-w-[1400px] px-14 py-5 mx-auto bg-white -mt-10  duration-150 transition-all ease-in-out hover:border-orange-400 hover:border-4 border-2 rounded-md  flex w-full justify-between items-center shadow-2xl">
                    <div className="mt-2.5 relative  w-full text-gray-400 focus-within:text-gray-600 max-w-5xl">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BiSearchAlt2 size={24} />
                        </div>
                        <input
                            placeholder="Up for some learning and growing today?"
                            className="block font-bold w-full  py-4 pl-10  text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                    </div>

                    <button type="button" className="btn btn-ghost px-10 hover:bg-blue-600 bg-gray-600 text-white text-2xl font-bold tracking-wider">
                        Search
                    </button>
                </div>
            )}
        </>
    );
};

export default Searchbar;
