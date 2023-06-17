/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';

const SearchResult = () => {
    const { state } = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setShowPopup(false);
    };
    return (
        <div className="h-[30vh] bg-blue-900 pt-40">
            <div data-aos="fade-left" className="grid grid-cols-3 justify-items-center my-32">
                <div className="col-span-1 h-[90vh] sticky bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                    <h1 className="text-4xl tracking-wider font-bold text-gray-500">Search</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Destination</h3>
                            <input {...register('firstName', { required: true, maxLength: 20 })} defaultValue={state[0]?.place} className="input input-bordered w-full text-xl  font-bold" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Check in Date</h3>
                            <input
                                {...register('date')}
                                defaultValue={`${moment(state[0]?.startDate).format('LL')} to ${moment(state[0]?.endDate).format('LL')}`}
                                className="input input-bordered w-full text-xl  font-bold"
                            />
                        </div>
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold">Options</h3>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Min Price (per night) </p>
                                <input {...register('minPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px] text-xl  font-bold" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Max Price (per night) </p>
                                <input {...register('maxPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px] text-xl  font-bold" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Adult </p>
                                <input
                                    {...register('adult', { required: true, maxLength: 20 })}
                                    type="number"
                                    min={0}
                                    className="input input-bordered w-[80px] text-xl  font-bold"
                                    defaultValue={state[0]?.adult}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Children </p>
                                <input
                                    {...register('children', { required: true, maxLength: 20 })}
                                    type="number"
                                    min={0}
                                    className="input input-bordered w-[80px] text-xl  font-bold"
                                    defaultValue={state[0]?.children}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Room </p>
                                <input
                                    {...register('room', { required: true, maxLength: 20 })}
                                    type="number"
                                    min={0}
                                    className="input input-bordered w-[80px] text-xl  font-bold"
                                    defaultValue={state[0]?.room}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn border-none text-xl font-bold text-white btn-block bg-blue-700 hover:bg-black px-5">
                            Search
                        </button>
                    </form>
                </div>
                <div data-aos="fade-up" className="col-span-2 flex flex-col gap-10 w-full p-10">
                    {state[1]?.hotels && state[1]?.hotels.map((item) => <SearchCard key={item?.hotelId} data={item} />)}
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
                    <div className="modal-container bg-white w-1/2 md:w-96 mx-auto rounded-lg shadow-lg z-20">
                        <div className="modal-content p-4">
                            <h3 className="text-lg font-bold mb-4">Limited Time Offer!</h3>
                            <p className="mb-4">
                                Hurry up! Get 20% off on your first purchase. Use code <span className="text-orange-500 text-xl font-bold tracking-wider">FIRST20</span> at checkout.
                            </p>
                            <button type="button" htmlFor="close-modal" className="btn btn-primary" onClick={closeModal}>
                                Please Booking First
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <input type="checkbox" id="close-modal" className="modal-toggle" />
        </div>
    );
};

export default SearchResult;
