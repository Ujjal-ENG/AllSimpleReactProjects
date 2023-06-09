/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { BsFillCalendar2DayFill, BsFillCartFill } from 'react-icons/bs';
import { FaUtensils } from 'react-icons/fa';
import { HiMenu, HiUserGroup } from 'react-icons/hi';
import { MdContactPhone, MdOutlineRateReview } from 'react-icons/md';
import { RiContactsBook2Fill, RiSecurePaymentFill } from 'react-icons/ri';
import { TbBrandBooking } from 'react-icons/tb';
import { TfiMenuAlt } from 'react-icons/tfi';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import useCart from '../../../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="grid grid-cols-3">
            <div className="drawer col-span-1  drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                        <h1 className="text-4xl uppercase font-bold text-center py-2">Flavor | Flow</h1>
                        <h4 className="text-2xl uppercase tracking-widest font-bold text-center pt-2 pb-14">Restaurant</h4>
                        {isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/admin-home" className="text-xl font-semibold uppercase hover:text-white">
                                        <AiFillHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItem" className="text-xl font-semibold uppercase hover:text-white">
                                        <FaUtensils />
                                        Add an Item
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-items" className="text-xl font-semibold uppercase hover:text-white">
                                        <TfiMenuAlt />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-bookings" className="text-xl font-semibold uppercase hover:text-white">
                                        <RiContactsBook2Fill />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-users" className="text-xl font-semibold uppercase hover:text-white">
                                        <HiUserGroup />
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/dashboard/user-home" className="text-xl font-semibold uppercase hover:text-white">
                                        <AiFillHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/reservations" className="text-xl font-semibold uppercase hover:text-white">
                                        <BsFillCalendar2DayFill />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/payments" className="text-xl font-semibold uppercase hover:text-white">
                                        <RiSecurePaymentFill />
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/carts" className="text-xl font-semibold uppercase hover:text-white">
                                        <BsFillCartFill />
                                        My Cart
                                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/reviews" className="text-xl font-semibold uppercase hover:text-white">
                                        <MdOutlineRateReview />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/bookings" className="text-xl font-semibold uppercase hover:text-white">
                                        <TbBrandBooking />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <div className="divider text-white" />
                        <li>
                            <NavLink to="/" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-menu" className="text-xl font-semibold uppercase hover:text-white">
                                <HiMenu />
                                Food Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillShopping />
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <MdContactPhone />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
