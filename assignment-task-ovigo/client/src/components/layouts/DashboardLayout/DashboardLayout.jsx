/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="grid grid-cols-3">
            <div className="drawer col-span-1  drawer-mobile">
                {isAdmin ? (
                    <div className="col-span-1 h-[90vh] sticky bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                        <h1 className="text-4xl tracking-wider font-bold text-gray-500">Admin Dashboard</h1>
                        <ul className="menu bg-base-200 w-72 rounded-box text-xl font-bold tracking-wide">
                            <li>
                                <Link to="dashboard/manage-users">Manage Users</Link>
                            </li>
                            <li>
                                <Link to="dashboard/manage-bookings">Manage Bookings</Link>
                            </li>
                            <li>
                                <Link to="dashboard/add-hotel">Add Hotel Room</Link>
                            </li>
                            <li>
                                <Link to="/">Manage Room</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="col-span-1 h-[90vh] sticky bg-orange-400 p-4 space-y-4 rounded-2xl mt-10 max-w-sm w-full">
                        <h1 className="text-4xl tracking-wider font-bold text-gray-500">User Dashboard</h1>
                        <ul className="menu bg-base-200 w-72 rounded-box text-xl font-bold tracking-wide">
                            <li>
                                <Link to="dashboard/selected-bookings">Selected Booking</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
