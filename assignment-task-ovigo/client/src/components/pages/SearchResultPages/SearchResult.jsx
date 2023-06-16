/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const { state } = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(state);
    return (
        <div className="h-[30vh] bg-blue-900 pt-40">
            <div className="grid grid-cols-3 justify-items-center my-32">
                <div className="col-span-1 bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                    <h1 className="text-4xl tracking-wider font-bold text-gray-500">Search</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Destination</h3>
                            <input {...register('firstName', { required: true, maxLength: 20 })} defaultValue={state?.place} className="input input-bordered w-full" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Check in Date</h3>
                            <input
                                {...register('date', { required: true, maxLength: 20 })}
                                defaultValue={`${moment(state?.startDate).format('LL')} to ${moment(state?.endDate).format('LL')}`}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold">Options</h3>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Min Price (per night) </p>
                                <input {...register('minPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px]" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Max Price (per night) </p>
                                <input {...register('maxPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px]" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Adult </p>
                                <input {...register('maxPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px]" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Children </p>
                                <input {...register('maxPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px]" />
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex-grow font-bold tracking-wide">Room </p>
                                <input {...register('maxPrice', { required: true, maxLength: 20 })} type="number" min={0} className="input input-bordered w-[80px]" />
                            </div>
                        </div>
                        <button type="submit" className="btn border-none text-xl font-bold text-white btn-block bg-blue-700 hover:bg-black px-5">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-span-2 border-2 border-red-500 w-full p-10">gderg</div>
            </div>
        </div>
    );
};

export default SearchResult;
