/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateFrom = () => {
    const { state } = useLocation();

    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center py-4 tracking-wider">Update the Events</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={datas.title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                    Image URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    name="image"
                    type="text"
                    placeholder="Enter image URL"
                    value={datas.image}
                    onChange={handleInputChange}
                />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
        </form>
    );
};

export default UpdateFrom;
