/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

function SingleBooking() {
    const [startDate, setStartDate] = useState(null);

    const loader = useLoaderData();

    return (
        <div>
            <div className=" fixed top-0 left-0 w-full h-full bg-cover bg-center z-0 duration-200 transition-all ease-in" style={{ backgroundImage: `url(${loader.findData.image})` }} />

            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30" />
            <div className="relative z-10">
                <Navbar />

                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-4">
                        <div className="w-full space-y-4">
                            <h1 className="hover-stoke uppercase tracking-widest text-5xl font-bold text-white" data-text={loader.findData.title}>
                                {loader.findData.title}
                            </h1>
                            <p className="text-gray-100 tracking-wider ">{loader.findData.description}</p>
                        </div>
                    </div>
                    <div className="col-span-8 ml-24 w-full">
                        <div className="card  w-1/2 mx-auto shadow-2xl bg-base-100  ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="Where your from?" className="input input-bordered text-black font-bold" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" placeholder="Where you go?" className="input input-bordered text-black font-bold" />
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                                            From
                                        </label>
                                        <div className="relative">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                customInput={<input className="border-2 border-gray-300 p-2 rounded-md" />}
                                            />
                                            <div className="absolute top-0 right-0 px-3 py-2">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M17 7h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9h1a1 1 0 0 0 0-2zm-7 8v2H6v-2h4zm5 0v2h-4v-2h4zm2-5H3V5h12v5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                                            To
                                        </label>
                                        <div className="relative">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                customInput={<input className="border-2 border-gray-300 p-2 rounded-md" />}
                                            />

                                            <div className="absolute top-0 right-0 px-3 py-2">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M17 7h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9h1a1 1 0 0 0 0-2zm-7 8v2H6v-2h4zm5 0v2h-4v-2h4zm2-5H3V5h12v5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <Link to="/search" type="button" className="btn btn-warning w-full">
                                        Start Booking
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBooking;
