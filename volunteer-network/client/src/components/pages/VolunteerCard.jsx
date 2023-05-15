/* eslint-disable react/jsx-indent-props */
import React from 'react';

const VolunteerCard = ({ data }) => {
    return (
        <div>
            <div className="p-4 w-full ">
                <div className="h-full flex flex-col items-center text-center">
                    <img alt={data.title} className="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={data.image} />
                    <h1 className="text-xl font-bold bg-red-400 w-full py-4 -mt-4 rounded-b-lg">{data.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;
