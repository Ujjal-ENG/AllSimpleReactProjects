/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */

import axios from 'axios';
import { enGB } from 'date-fns/locale';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBed } from 'react-icons/fa';
import { IoIosMan } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { DateRangePicker, END_DATE, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        data.startDate = startDate;
        data.endDate = endDate;
        const query = data?.place.toLowerCase();
        try {
            const response = await axios.get(`http://localhost:8080/hotels?placeName=${query}`);
            if (response.data.data.length > 0) {
                setLoading(false);
                navigate('/search-results', { state: [data, ...response.data.data] });
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="max-w-[1400px] px-4 mx-auto bg-white border-black duration-150 transition-all ease-in-out hover:border-orange-400 hover:border-4 border-2 rounded-md  -mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center">
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaBed size={24} />
                    </div>
                    <input
                        {...register('place', { required: true })}
                        placeholder="Where are you going?"
                        className="block font-bold w-full py-4 pl-10 pr-9 text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                </div>

                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <MdDateRange size={24} />
                    </div>
                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        minimumDate={new Date()}
                        minimumLength={1}
                        format="dd MMM yyyy"
                        locale={enGB}>
                        {({ startDateInputProps, endDateInputProps, focus }) => (
                            <div className="date-range">
                                <input className={`input${focus === START_DATE ? ' -focused' : ''} pl-10 font-bold`} {...startDateInputProps} required />
                                <span className="date-range_arrow" />
                                <input className={`input${focus === END_DATE ? ' -focused' : ''} font-bold`} {...endDateInputProps} placeholder="08/06/2022" required />
                            </div>
                        )}
                    </DateRangePicker>
                </div>

                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none w-[250px] ">
                        <IoIosMan size={24} />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            {...register('adult', { required: true })}
                            placeholder="1 adult,"
                            type="number"
                            className="block font-bold py-4 pl-5 pr-9 text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 w-[130px]"
                        />
                        <input
                            {...register('children', { required: true })}
                            placeholder="0 children ,"
                            type="number"
                            className="block font-bold py-4  text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 w-[100px]"
                        />
                        <input
                            {...register('room', { required: true })}
                            placeholder="1 room"
                            type="number"
                            className="block font-bold py-4  text-black placeholder-gray-500 transition-all duration-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 w-[100px]"
                        />
                    </div>
                </div>

                {loading ? (
                    <button type="button" className="btn">
                        <span className="loading btn-primary loading-spinner" />
                        loading
                    </button>
                ) : (
                    <button type="submit" className="btn border-none text-xl font-bold text-white bg-blue-700 hover:bg-black px-5">
                        Search
                    </button>
                )}
            </form>
        </div>
    );
};

export default Search;
