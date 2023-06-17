/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SelectedBookings = () => {
    const [loading, setIsLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    const { userInfo } = useAuth();
    const {
        data: bookings = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['bookings'],
        enabled: !!userInfo?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/bookings?email=${userInfo?.email}`);
            return data.data;
        }
    });

    const handleDeleteBooking = async (id) => {
        setIsLoading(true);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Cancel it!'
            });
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/bookings/${id}`);
                if (data) {
                    Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
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
    return (
        <div>
            <div>
                <Helmet>
                    <title>F|Food|School - My Selected Classes</title>
                </Helmet>
                {isLoading && (
                    <div className="h-screen flex justify-center items-center">
                        <progress className="progress w-56" />
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 py-10">
                    {bookings.length <= 0 ? (
                        <h1 className="text-4xl font-bold text-center py-10 text-green-400">You did not Booked any Rooms yet</h1>
                    ) : (
                        bookings.map((data) => (
                            <div key={data._id} className="overflow-hidden bg-white rounded shadow">
                                <div className="p-5">
                                    <div className="relative">
                                        <a href="#" title="" className="block ">
                                            <img className="object-cover w-full h-72" src={data?.hotelImage} alt={data?.hotelName} />
                                        </a>

                                        <div className="absolute top-4 right-6">
                                            <span
                                                className={`px-4 py-2 text-2xl font-semibold tracking-widest text-white uppercase ${
                                                    data?.status === 'pending' ? 'bg-red-500' : 'bg-green-400'
                                                } rounded-full`}>
                                                {data?.status}{' '}
                                            </span>
                                        </div>
                                    </div>

                                    <h1 className="my-5 text-3xl font-bold text-center">
                                        HotelName: <span className="text-primary">{data?.hotelName}</span>
                                    </h1>
                                    <div className="space-y-2">
                                        <h5 className="text-2xl font-bold">
                                            HotelBookerName: <span className="text-primary">{data?.userName}</span>
                                        </h5>
                                        <h5 className="text-2xl font-bold ">
                                            HotelBookerEmail: <span className="text-primary">{data?.userEmail}</span>
                                        </h5>
                                        <h5 className="text-2xl font-bold ">
                                            RoomType: <span className="text-primary">{data?.roomType}</span>
                                        </h5>
                                        <h5 className="text-2xl font-bold ">
                                            Max People: <span className="text-error">{data?.occupancy}</span>
                                        </h5>
                                        <h5 className="text-2xl font-bold ">
                                            Price: <span className="text-error">${data?.pricePerNight}</span>
                                        </h5>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        {loading ? (
                                            <button className="btn btn-square">
                                                <span className="loading loading-spinner" />
                                            </button>
                                        ) : (
                                            <button type="button" className="btn btn-error font-bold  mt-5" onClick={() => handleDeleteBooking(data?._id)} disabled={data?.status === 'approved'}>
                                                Cancel Booking!!
                                            </button>
                                        )}
                                        <Link to="/dashboard/selected-bookings/payment-details" state={data} type="button" className="btn btn-primary font-bold  mt-5">
                                            Payment
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedBookings;
