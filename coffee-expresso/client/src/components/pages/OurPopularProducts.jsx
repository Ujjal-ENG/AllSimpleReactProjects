/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FaCoffee, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cup from '../../assets/cup.png';
import SHop from '../../assets/shop.png';

const OurPopularProducts = () => {
    return (
        <div className="relative">
            <img src={Cup} alt="cup" className="absolute z-20 top-20" />
            <img src={SHop} alt="shop" className="absolute  top-20 right-0" />

            <h4 className="text-2xl text-center py-2"> --- Sip & Savor ---</h4>
            <h1 className="text-5xl tracking-wider text-center pt-2 font-semibold">Our Popular Products</h1>
            <div className="w-full flex items-center justify-center pt-5 ">
                <Link to="/add-coffee" className="btn text-2xl font-bold flex items-center gap-3 btn-primary bg-[#E3B577]">
                    Add Coffee
                    <FaCoffee className="text-3xl font-bold text-black" />
                </Link>
            </div>

            {/* coffee cars */}
            <div className="grid grid-cols-2 justify-items-center mt-16 my-container">
                <div className="card card-side bg-gray-200 max-w-3xl w-full duration-200 transition-all ease-in-out shadow-xl hover:shadow-2xl hover:translate-y-2">
                    <figure>
                        <img src="https://images.pexels.com/photos/2648988/pexels-photo-2648988.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Movie" className="w-60 h-52 object-cover p-8" />
                    </figure>
                    <div className="flex justify-between items-center">
                        <div className=" mx-2 space-y-2">
                            <h2 className="card-title">
                                Name: <span className="font-normal text-md">Americano Coffee</span>
                            </h2>
                            <h2 className="card-title">
                                Chef: <span className="font-normal text-md">Ujjal Roy</span>
                            </h2>
                            <h2 className="card-title">
                                Price: <span className="font-normal text-md">$80</span>
                            </h2>
                        </div>
                        <div className="card-actions flex justify-end items-end border-2 relative">
                            <div className="btn-group btn-group-vertical space-y-1 absolute -right-28 -bottom-20">
                                <Link to="/view-coffee" type="button" className="bg-[#E3B577] p-2 rounded-md ">
                                    <AiFillEye className="text-4xl  text-white cursor-pointer mx-auto" />
                                </Link>
                                <Link to="/update-coffee" type="button" className="bg-black p-2 rounded-md">
                                    <FaEdit className="text-4xl  text-white cursor-pointer mx-auto" />
                                </Link>
                                <button type="button" className="bg-red-400 p-2 rounded-md">
                                    <AiFillDelete className="text-4xl  text-white cursor-pointer mx-auto" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPopularProducts;
