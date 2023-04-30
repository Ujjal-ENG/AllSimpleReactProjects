/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function LeftSide({ data, id }) {
    if (data === null || id === 0) {
        return (
            <div className="px-4">
                <span className="hover-stroke text-6xl w-full font-bold" data-text="The world is a book and those who do not travel read only one page">
                    The world is a book and those who do not travel read only one page
                </span>
            </div>
        );
    }
    return (
        <div className="w-full space-y-4">
            <h1 className="hover-stoke uppercase tracking-widest text-5xl font-bold text-white" data-text={data.title}>
                {data.title}
            </h1>
            <p className="text-gray-200 tracking-wider ">{`${data.description.slice(0, 100)}...`}</p>
            <Link to={`/single-booking/${data.id}`} className="btn btn-warning btn-wide flex items-center gap-3 text-xl">
                Booking
                <FiArrowRight className="text-2xl" />
            </Link>
        </div>
    );
}

export default LeftSide;
