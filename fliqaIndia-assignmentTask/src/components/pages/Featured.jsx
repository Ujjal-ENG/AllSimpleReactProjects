/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import Button from '../layouts/shared/Button';

const Featured = () => {
    return (
        <div className="mb-10">
            <div>
                <h2 className="text-5xl font-semibold tracking-wider px-10 pt-14 text-teal-700">Our Featured Services</h2>
                <p className=" pb-10 px-10 text-xl tracking-wider text-black">Discover the range of services provided by FliqaIndia</p>
            </div>
            <div className="px-20 grid grid-cols-1 gap-14 md:grid-cols-4 justify-items-center py-10 relative">
                <div className="shadow-2xl rounded-b-2xl">
                    <div className="w-96 h-72 rounded-b-2xl">
                        <img
                            src="https://images.pexels.com/photos/13123599/pexels-photo-13123599.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="weeding1"
                            className="w-full h-full object-fill shadow-2xl rounded-2xl shadow-purple-300 duration-150 transition-all ease-in-out hover:scale-110 "
                        />
                    </div>
                    <div className="space-y-2 pt-5 rounded-b-2xl">
                        <h1 className="text-2xl font-bold text-center">Pre Wedding Photoshoot</h1>
                        <div className="bg-black  w-80 mx-auto h-0.5 " />
                        <p className="text-xl text-center font-bold text-gray-500">
                            Starting at <span className="font-normal">25,000 (One Day)</span>
                        </p>
                    </div>
                    <div className="flex justify-center shadow-2xl items-center w-full mt-auto pt-10 pb-5 rounded-b-2xl">
                        <Button>Know More</Button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-b-2xl">
                    <div className="w-96 h-72 rounded-b-2xl">
                        <img
                            src="https://images.pexels.com/photos/14840508/pexels-photo-14840508.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="weeding1"
                            className="w-full h-full object-fill shadow-2xl rounded-2xl shadow-red-200 duration-150 transition-all ease-in-out hover:scale-110 "
                        />
                    </div>
                    <div className="space-y-2 pt-5 rounded-b-2xl">
                        <h1 className="text-2xl font-bold text-center">Pre Wedding Photoshoot</h1>
                        <div className="bg-black  w-80 mx-auto h-0.5 " />
                        <p className="text-xl text-center font-bold text-gray-500">
                            Starting at <span className="font-normal">25,000 (One Day)</span>
                        </p>
                    </div>
                    <div className="flex justify-center shadow-2xl items-center w-full mt-auto pt-10 pb-5 rounded-b-2xl">
                        <Button>Know More</Button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-b-2xl">
                    <div className="w-96 h-72 rounded-b-2xl">
                        <img
                            src="https://images.pexels.com/photos/725463/pexels-photo-725463.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="weeding1"
                            className="w-full h-full object-fill shadow-2xl rounded-2xl shadow-fuchsia-500  duration-150 transition-all ease-in-out hover:scale-110 "
                        />
                    </div>
                    <div className="space-y-2 pt-5 rounded-b-2xl">
                        <h1 className="text-2xl font-bold text-center">Pre Wedding Photoshoot</h1>
                        <div className="bg-black  w-80 mx-auto h-0.5 " />
                        <p className="text-xl text-center font-bold text-gray-500">
                            Starting at <span className="font-normal">25,000 (One Day)</span>
                        </p>
                    </div>
                    <div className="flex justify-center shadow-2xl items-center w-full mt-auto pt-10 pb-5 rounded-b-2xl">
                        <Button>Know More</Button>
                    </div>
                </div>

                <div className="shadow-2xl rounded-b-2xl">
                    <div className="w-96 h-72 rounded-b-2xl">
                        <img
                            src="https://images.pexels.com/photos/1777843/pexels-photo-1777843.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="weeding1"
                            className="w-full h-full object-fill shadow-2xl rounded-2xl shadow-violet-400 duration-150 transition-all ease-in-out hover:scale-110 "
                        />
                    </div>
                    <div className="space-y-2 pt-5 rounded-b-2xl">
                        <h1 className="text-2xl font-bold text-center">Pre Wedding Photoshoot</h1>
                        <div className="bg-black  w-80 mx-auto h-0.5 " />
                        <p className="text-xl text-center font-bold text-gray-500">
                            Starting at <span className="font-normal">25,000 (One Day)</span>
                        </p>
                    </div>
                    <div className="flex justify-center shadow-2xl items-center w-full mt-auto pt-10 pb-5 rounded-b-2xl">
                        <Button>Know More</Button>
                    </div>
                </div>

                <div className="absolute top-80 left-0">
                    <button type="button" className="btn btn-circle">
                        <HiOutlineArrowSmLeft size={32} />
                    </button>
                </div>
                <div className="absolute top-80 right-0">
                    <button type="button" className="btn btn-circle">
                        <HiOutlineArrowSmRight size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
