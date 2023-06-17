/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ModalData = ({ data }) => {
    const { userInfo } = useAuth();
    const [isClicked, setIsClicked] = useState(null);

    const [axiosSecure] = useAxiosSecure();
    const handleReserveNow = async (room) => {
        if (!userInfo) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login for reserve the rooms!'
            });
        }
        const hotelBooker = {
            ...room,
            userName: userInfo?.displayName,
            userEmail: userInfo?.email,
            hotelName: data?.hotelName,
            hotelImage: data?.imageURL,
            status: 'pending'
        };
        try {
            const { data } = await axiosSecure.post('/bookings', hotelBooker);
            if (data.success) {
                setIsClicked(room?.roomId);
                Swal.fire({
                    icon: 'success',
                    text: 'Your Room is Booked now!!! please Payment Asap,,'
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box max-w-2xl w-full">
                    <h3 className="font-bold text-lg">Hotel Name: {data?.hotelName}</h3>
                    <p className="py-4">Select Your Rooms!</p>

                    {data?.rooms.map((room) => (
                        <div key={room?.roomId} className="flex-grow sm:pl-8 space-y-4 border-2 rounded-lg p-3 mt-10">
                            <h2 className="title-font font-medium text-lg text-gray-900">{room?.roomType}</h2>
                            <p className="mb-4">{room?.description}</p>
                            <h3 className="font-bold">Max People: {room?.occupancy}</h3>
                            <h3 className="font-bold text-xl">Price: ${room?.pricePerNight}</h3>
                            <h3 className="font-bold">Amenities: {data?.amenities.length}</h3>
                            {data?.amenities.map((item, idx) => (
                                <div key={idx} className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <path d="M22 4L12 14.01l-3-3" />
                                    </svg>
                                    <span className="title-font font-medium">{item}</span>
                                </div>
                            ))}
                            <button
                                onClick={() => handleReserveNow(room)}
                                type="button"
                                className="btn flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none btn-block my-6 hover:bg-indigo-600 rounded"
                                disabled={room?.roomId === isClicked}>
                                Reserve Now
                            </button>
                        </div>
                    ))}
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
                            ✕
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalData;
