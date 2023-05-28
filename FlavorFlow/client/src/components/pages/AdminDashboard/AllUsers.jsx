/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GrGroup } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import AllUser from '../../../hooks/allUsers';
import SharedTitle from '../../layouts/shared/SharedTitle';

const AllUsers = () => {
    const [users] = AllUser();

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
                await axios.delete(`http://localhost:8080/carts/${id}`);
                Swal.fire('Deleted!', 'Your Food Item has been deleted.', 'success');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full -ml-0 md:-ml-36">
            <Helmet>
                <title>Flavor|Flow - All Users</title>
            </Helmet>
            <SharedTitle message="Home Many??" title="MANAGE ALL USERS" />
            <div className="shadow-lg rounded-lg p-8 mt-4 mb-6">
                <h1 className="text-2xl md:text-4xl font-bold tracking-wider">Total User: {users.length || 0}</h1>
                <div className="overflow-x-auto my-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th />
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {users &&
                                users.map((el, idx) => (
                                    <tr key={el._id}>
                                        <th>{++idx}</th>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>

                                        <td>
                                            {' '}
                                            <button onClick={() => handleDelete(el._id)} type="button" className="btn btn-warning  border-0">
                                                <GrGroup className="text-2xl text-white" />
                                            </button>
                                        </td>
                                        <td>
                                            {' '}
                                            <button onClick={() => handleDelete(el._id)} type="button" className="btn btn-error  border-0">
                                                <RiDeleteBin6Line className="text-2xl text-white" />
                                            </button>
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

export default AllUsers;
