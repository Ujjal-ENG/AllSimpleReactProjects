/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const [allItems, setAllItems] = useState([]);
    const { allMenuItems } = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPage = Math.ceil(allMenuItems / itemsPerPage);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8080/menu?page=${currentPage}`).then(({ data }) => {
            setAllItems(data.data);
            setLoading(false);
        });
    }, [currentPage]);

    const navigateToPage = (page) => {
        console.log(page);
        setCurrentPage(page);
    };

    const handleEdit = async (id) => {
        try {
            console.log(id);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axiosSecure.delete(`/menu/${id}`);
                Swal.fire('Deleted!', 'User is Deleted.', 'success');
                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="md:-ml-48 -ml-0">
            <Helmet>
                <title>Flavor|Flow - Manage Items</title>
            </Helmet>
            <SharedTitle message="Hurry Up!" title="MANAGE ALL ITEMS" />
            <div className="shadow-lg rounded-lg p-8 mt-4 mb-6">
                <h1 className="text-2xl md:text-4xl font-bold tracking-wider">Total Items: {allItems?.length || 0}</h1>
                <div className="overflow-x-auto my-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th />
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Edit Action</th>
                                <th>Delete Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {}
                            {/* row 1 */}
                            {loading ? (
                                <span className="loading loading-bars loading-md bg-error" />
                            ) : (
                                allItems?.map((el, idx) => (
                                    <tr key={el._id}>
                                        <th>{++idx}</th>
                                        <td>
                                            <img src={el.image} alt={el.name} className="w-24 rounded-md h-24 object-cover" />
                                        </td>
                                        <td>{el.name}</td>
                                        <td>{el.price}</td>
                                        <td>
                                            <button onClick={() => handleEdit(el._id)} type="button" className="btn btn-warning  border-0">
                                                <AiFillEdit className="text-2xl text-white" />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(el._id)} type="button" className="btn btn-error  border-0">
                                                <RiDeleteBin6Line className="text-2xl text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="join grid py-8 grid-cols-3 justify-items-center">
                <button type="button" disabled={currentPage === 1} className="join-item btn btn-outline" onClick={() => navigateToPage(currentPage - 1)}>
                    Previous page
                </button>
                <h1 className="pt-1 font-bold text-3xl">
                    Page {currentPage} of {totalPage}
                </h1>
                <button type="button" disabled={currentPage === totalPage} className="join-item btn btn-outline" onClick={() => navigateToPage(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ManageItems;
