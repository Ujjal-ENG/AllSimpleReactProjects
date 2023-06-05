/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TiTickOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const ManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentsData = [], refetch } = useQuery({
        queryKey: ['payments-data'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/payments');
            return data.data;
        }
    });

    const handleEdit = async (id) => {
        const result = await Swal.fire({
            title: 'Do you want to update the Status?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            denyButtonText: "Don't Update"
        });
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const { data } = await axiosSecure.patch(`/payments?id=${id}`);
            if (data.success) {
                Swal.fire('Updated the Status Successfully!', '', 'success');
                refetch();
            }
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
        }
    };

    return (
        <div className="max-w-7xl -ml-0 md:-ml-48 mx-auto">
            <Helmet>
                <title>Flavor|Flow - Manage Bookings</title>
            </Helmet>
            <SharedTitle message="At a Glance" title="MANAGE ALL THE BOOKINGS" />
            <div className="shadow-lg rounded-lg p-8 mt-4 mb-6">
                <h1 className="text-2xl md:text-4xl font-bold tracking-wider">Total ITEMS: {paymentsData?.length || 0}</h1>
                <div className="overflow-x-auto my-8">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Booking Date</th>
                                <th>Booking Time</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {paymentsData &&
                                paymentsData.map((el) => (
                                    <tr>
                                        <th>{el?.email}</th>
                                        <td>{moment(el?.date).subtract(10, 'days').calendar()}</td>
                                        <td>{moment(el?.date).format('h:mm:ss a')}</td>
                                        <td>{el?.price}</td>
                                        <td>{el?.status}</td>
                                        <td>
                                            {el?.status === 'Done' ? (
                                                <button onClick={() => handleEdit(el?._id)} type="button" className="btn btn-circle  btn-success" disabled style={{ backgroundColor: 'greenyellow' }}>
                                                    <TiTickOutline size={30} />
                                                </button>
                                            ) : (
                                                <button onClick={() => handleEdit(el?._id)} type="button" className="btn btn-circle btn-outline">
                                                    <TiTickOutline size={30} />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;
