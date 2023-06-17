/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageBookings = () => {
    const [clicked, setIsClicked] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const { userInfo } = useAuth();
    const {
        data: bookings = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['all-bookings'],
        enabled: !!userInfo?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get('/bookings-admin');
            return data.data;
        }
    });
    const handleApproveBooking = async (id) => {
        setIsLoading(true);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approved the Bookings!'
            });
            if (result.isConfirmed) {
                const { data } = await axiosSecure.patch(`/bookings/${id}`);
                setIsClicked(id);
                if (data) {
                    Swal.fire('Approved!', 'Your booking has been Approved.', 'success');

                    console.log(clicked, id);
                    setIsLoading(false);
                    refetch();
                }
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
            });
        }
    };
    console.log(bookings);
    return (
        <div>
            <div className="overflow-x-auto mr-10 py-10 ">
                {isLoading && (
                    <div className="h-screen flex justify-center items-center">
                        <progress className="progress w-56" />
                    </div>
                )}
                {bookings.length > 0 ? (
                    bookings.map((item, idx) => {
                        return (
                            <table key={item?._id} className="table">
                                {/* head */}
                                <thead className="bg-green-400 text-white font-bold text-2xl">
                                    <tr>
                                        <th />
                                        <th>Hotel Name & Image</th>
                                        <th>UserName & Email</th>
                                        <th>Price</th>
                                        <th>Room Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-2xl font-bold">
                                    {/* row 1 */}
                                    <tr>
                                        <th>{++idx}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.hotelImage} alt={item?.hotelName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item?.hotelName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.userName}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{item?.userEmail}</span>
                                        </td>
                                        <td className="text-red-500">${item?.pricePerNight}</td>
                                        <th>{item?.roomType}</th>
                                        <th>{item?.status}</th>
                                        <td>
                                            {loading ? (
                                                <button className="btn btn-square">
                                                    <span className="loading loading-spinner" />
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-error font-bold  mt-5"
                                                    onClick={() => handleApproveBooking(item?._id)}
                                                    disabled={String(item?._id) === String(clicked)}>
                                                    Make it Approve!!
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        );
                    })
                ) : (
                    <h1 className="text-5xl font-bold text-red-500 text-center py-10">No Booking yet!!!</h1>
                )}
            </div>
        </div>
    );
};

export default ManageBookings;
