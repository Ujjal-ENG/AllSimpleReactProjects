/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
// to={`/book-events/${data._id}`} state={data}

const VolunteerCard = ({ data, onClick }) => {
    return (
        <div className="p-4 w-full">
            <div className="h-full relative flex flex-col items-center text-center">
                <img alt={data.title} className="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={data.image} />

                <label htmlFor="my-modal-6" className="absolute -right-5 top-0 btn cursor-pointer" onClick={() => onClick(data)}>
                    📝
                </label>

                <h1 className="text-xl font-bold bg-red-400 w-full py-4 -mt-4 rounded-b-lg">{data.title}</h1>
            </div>
        </div>
    );
};

export default VolunteerCard;
