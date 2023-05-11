/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import BannerImg from '../../../assets/images/checkout/checkout.png';
import Logo from '../../../assets/logo.png';

const ServiceDetails = () => {
    const { state } = useLocation();

    return (
        <div>
            <div className="hero h-[300px] rounded-xl mb-36" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-gray-900 to-transparent rounded-xl" />
                <div className="hero-content text-start text-neutral-content relative">
                    <div className="w-screen ml-20">
                        <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-between ">
                <div className="col-span-2 px-5">
                    <img src={state.img} alt={state.title} className="max-w-4xl w-full  h-[400px] object-cover rounded-xl" />
                    <h3 className="text-3xl font-bold tracking-wider py-8">Unique Car Engine Service</h3>
                    <p className="tracking-wider text-justify text-gray-500 max-w-3xl w-full">{state.description}</p>
                    <div className="grid grid-cols-2 justify-between py-10 gap-10">
                        {state.facility.map((el, idx) => (
                            <div key={idx} className="bg-gray-200 p-10 space-y-2 max-w-xs rounded-lg duration-100 transition-all ease-linear hover:border-t-4 hover:border-t-orange-600">
                                <h4 className="text-xl font-bold tracking-wider">{el.name}</h4>
                                <p className="tracking-wider text-justify text-gray-500 max-w-2xl w-full">{el.details}</p>
                            </div>
                        ))}
                    </div>
                    <p className="tracking-wider text-justify text-gray-500 max-w-3xl w-full">{state.description}</p>
                    <h3 className="text-3xl font-bold tracking-wider py-8">3 Simple Steps to Process</h3>
                    <p className="tracking-wider text-justify text-gray-500 max-w-3xl w-full">{state.description}</p>

                    <div className="grid grid-cols-3 justify-between py-10 gap-10 ">
                        <div className="border rounded-xl space-y-3 h-[280px] w-[235px] flex justify-center items-center flex-col">
                            <div className="w-28 h-28 rounded-full flex justify-center items-center bg-red-100">
                                <div className="w-20 text-2xl font-bold text-white h-20 rounded-full flex justify-center items-center bg-orange-600">01</div>
                            </div>
                            <h3 className="text-xl font-bold tracking-wider ">Step 1</h3>
                            <p className="tracking-wider text-2xl text-center text-gray-500 px-5 ">It uses a dictionary of over 200.</p>
                        </div>
                        <div className="border rounded-xl space-y-3 h-[280px] w-[235px] flex justify-center items-center flex-col">
                            <div className="w-28 h-28 rounded-full flex justify-center items-center bg-red-100">
                                <div className="w-20 text-2xl font-bold text-white h-20 rounded-full flex justify-center items-center bg-orange-600">02</div>
                            </div>
                            <h3 className="text-xl font-bold tracking-wider ">Step 2</h3>
                            <p className="tracking-wider text-2xl text-center text-gray-500 px-5 ">It uses a dictionary of over 200.</p>
                        </div>
                        <div className="border rounded-xl space-y-3 h-[280px] w-[235px] flex justify-center items-center flex-col">
                            <div className="w-28 h-28 rounded-full flex justify-center items-center bg-red-100">
                                <div className="w-20 text-2xl font-bold text-white h-20 rounded-full flex justify-center items-center bg-orange-600">03</div>
                            </div>
                            <h3 className="text-xl font-bold tracking-wider ">Step 3</h3>
                            <p className="tracking-wider text-2xl text-center text-gray-500 px-5 ">It uses a dictionary of over 200.</p>
                        </div>
                    </div>
                    <img src={state.img} alt={state.title} className="max-w-4xl h-[400px] w-full object-cover rounded-xl" />
                </div>

                <div className="col-span-1 space-y-7">
                    <div className="bg-gray-100 max-w-sm p-10 space-y-5 rounded-xl">
                        <h4 className="text-2xl font-bold tracking-wider">Services</h4>

                        <Link to="#" type="button" className="bg-orange-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none flex justify-between items-center text-white font-bold text-2xl">
                            Full Car Repair
                            <BiArrowFromLeft className="text-4xl" />
                        </Link>
                        <Link to="#" type="button" className="bg-orange-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none flex justify-between items-center text-white font-bold text-2xl">
                            Engine Repair
                            <BiArrowFromLeft className="text-4xl" />
                        </Link>
                        <Link to="#" type="button" className="bg-orange-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none flex justify-between items-center text-white font-bold text-2xl">
                            Automatic Services
                            <BiArrowFromLeft className="text-4xl" />
                        </Link>
                        <Link to="#" type="button" className="bg-orange-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none flex justify-between items-center text-white font-bold text-2xl">
                            Engine Oil Change
                            <BiArrowFromLeft className="text-4xl" />
                        </Link>
                        <Link to="#" type="button" className="bg-orange-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none flex justify-between items-center text-white font-bold text-2xl">
                            Battery Charge
                            <BiArrowFromLeft className="text-4xl" />
                        </Link>
                    </div>

                    <div className="bg-black max-w-sm p-10 space-y-5 rounded-xl">
                        <h4 className="text-2xl font-bold tracking-wider text-white">Download</h4>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <AiFillFileAdd className="text-4xl text-white" />
                                <div>
                                    <h5 className="text-xl font-bold text-white">Our Brochure</h5>
                                    <p className="text-gray-400">Download</p>
                                </div>
                            </div>
                            <Link to="#" type="button" className="btn btn-square text-4xl bg-orange-600 border-none">
                                <BiArrowToRight />
                            </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <AiFillFileAdd className="text-4xl text-white" />
                                <div>
                                    <h5 className="text-xl font-bold text-white">Company Details</h5>
                                    <p className="text-gray-400">Download</p>
                                </div>
                            </div>
                            <Link to="#" type="button" className="btn btn-square text-4xl bg-orange-600 border-none">
                                <BiArrowToRight />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-black max-w-sm p-10 rounded-xl">
                        <img src={Logo} alt="logo" />
                        <h4 className="text-xl font-bold tracking-wider text-center text-white">The Car Physician</h4>
                        <h5 className="text-2xl font-bold text-white py-8 text-center">Need Help? We are Here To Help You</h5>

                        <div className="relative w-[270px] h-[150px] bg-white rounded-xl flex flex-col justify-center items-center">
                            <h4 className="text-xl font-bold tracking-wider text-center text-black">
                                <span className="text-orange-600  font-extrabold">The Car Physician</span>
                                <br />
                                Special
                                <br />
                                <span className="text-xs text-gray-500">Save up to </span>
                                <span className="text-orange-600 text-xs font-extrabold">60% off</span>
                            </h4>
                            <button type="button" className="absolute -bottom-5 btn btn-active bg-orange-600 border-none">
                                Get a Quote
                            </button>
                        </div>
                    </div>

                    <h3 className="text-4xl font-bold">Price: ${state.price}</h3>
                    <Link to={`/checkout/${state._id}`} state={state} className="btn btn-block bg-orange-600 font-bold text-xl border-none">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
