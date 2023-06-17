/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axiosSecure.get('/users').then(({ data }) => {
            setIsLoading(false);
            return setUsers(data.data);
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>AssignmentTask - Manage Users</title>
            </Helmet>
            <div className="overflow-x-auto py-10">
                {loading && (
                    <div className="h-screen flex justify-center items-center">
                        <progress className="progress w-56" />
                    </div>
                )}
                <table className="table  table-zebra max-w-5xl mx-auto text-xl font-semibold text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-xl bg-green-400 text-white">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role of the User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users &&
                            users.map((el) => (
                                <tr key={el?._id}>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
