/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';

function BlogCard({ data }) {
    const { image, title, description, author, date } = data;
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex flex-col">
                <div className="md:flex-shrink-0">
                    <img className="h-full w-full max-h-72 object-cover " src={image} alt={title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{date}</div>
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <div className="mt-4 flex items-center">
                        <FaUser className="mr-2" />
                        <div className="text-sm font-medium text-gray-900">{author}</div>
                        <FaClock className="ml-auto animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
