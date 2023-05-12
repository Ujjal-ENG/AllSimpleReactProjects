/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import BannerImg from '../../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../../context/AuthProvider';

const CheckBookingDetails = () => {
    const { userInfo } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const count = 1;
    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/booking?email=${userInfo.email}`);
            if (data.success) {
                setBooking(data.bookings);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteService = (id) => {};

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="hero h-[300px] rounded-xl mb-36" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-gray-900 to-transparent rounded-xl" />
                <div className="hero-content text-start text-neutral-content relative">
                    <div className="w-screen ml-20">
                        <h1 className="mb-5 text-5xl font-bold">Booking Details</h1>
                    </div>
                </div>
            </div>

            {/* booking information shown to the users */}
            {booking.length === 0 ? (
                <h1 className="text-3xl font-bold text-orange-600 tracking-widest text-center">You have not booking any services yet..</h1>
            ) : (
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th />
                                <th>Booking Details</th>
                                <th>Customer Details</th>
                                <th>Service Taken</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {booking.map((el) => (
                                <tr key={el._id}>
                                    <th>
                                        {' '}
                                        <button onClick={() => handleDeleteService(el._id)} type="button" className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={el.serviceImg} alt={el.serviceName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{el.serviceName}</div>
                                                <div className="text-sm opacity-50">Booking Date: {el.BookingDate}</div>
                                                <div className="text-sm font-bold text-orange-600">Amount: {el.amount}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Name: {el.CustomerName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{el.CustomerEmail}</span>
                                    </td>
                                    <td className="text-xl font-bold">{el.serviceName}</td>
                                    <th>
                                        <button type="submit" className="btn bg-orange-600 border-none text-xl btn-md">
                                            Pending
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CheckBookingDetails;
