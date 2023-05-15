/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import MOdal from './MOdal';

const VolunteerCard = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <label htmlFor="my-modal-3" onClick={() => handleClick(data)}>
                <div className="p-4 w-full cursor-pointer">
                    <div className="h-full flex flex-col items-center text-center">
                        <img alt={data.title} className="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={data.image} />
                        <h1 className="text-xl font-bold bg-red-400 w-full py-4 -mt-4 rounded-b-lg">{data.title}</h1>
                    </div>
                </div>
            </label>

            {showModal && <MOdal onClose={handleCloseModal} data={data} />}
        </div>
    );
};

export default VolunteerCard;
