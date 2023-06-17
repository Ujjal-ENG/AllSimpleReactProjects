/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import SearchCard from './SearchCard';

const SearchResult = () => {
    const { state } = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="h-[30vh] bg-blue-900 pt-40">
            <div className="grid grid-cols-3 justify-items-center my-32">
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
                <div className="col-span-2 flex flex-col gap-10 w-full p-10">{state[1]?.hotels && state[1]?.hotels.map((item) => <SearchCard key={item?.hotelId} data={item} />)}</div>
            </div>
        </div>
    );
};

export default SearchResult;
