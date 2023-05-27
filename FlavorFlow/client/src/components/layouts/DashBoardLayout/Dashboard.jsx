/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { BsFillCalendar2DayFill, BsFillCartFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { MdContactPhone, MdOutlineRateReview } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TbBrandBooking } from 'react-icons/tb';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 ">
            <div className="drawer  drawer-mobile">
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

                        <li>
                            <Link to="/dashboard" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillHome />
                                User Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/reservations" className="text-xl font-semibold uppercase hover:text-white">
                                <BsFillCalendar2DayFill />
                                Reservation
                            </Link>
                        </li>
                        <li>
                            <Link to="/payments" className="text-xl font-semibold uppercase hover:text-white">
                                <RiSecurePaymentFill />
                                Payment History
                            </Link>
                        </li>
                        <li>
                            <Link to="/carts" className="text-xl font-semibold uppercase hover:text-white">
                                <BsFillCartFill />
                                My Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/reviews" className="text-xl font-semibold uppercase hover:text-white">
                                <MdOutlineRateReview />
                                Add Review
                            </Link>
                        </li>
                        <li>
                            <Link to="/bookings" className="text-xl font-semibold uppercase hover:text-white">
                                <TbBrandBooking />
                                My Booking
                            </Link>
                        </li>

                        <div className="divider text-white" />
                        <li>
                            <Link to="/" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillHome />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/our-menu" className="text-xl font-semibold uppercase hover:text-white">
                                <HiMenu />
                                Food Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <AiFillShopping />
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-food/salad" className="text-xl font-semibold uppercase hover:text-white">
                                <MdContactPhone />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;
