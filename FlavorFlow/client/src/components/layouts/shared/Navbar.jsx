/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import Lottie from 'react-lottie';
import { NavLink } from 'react-router-dom';
import animationData from '../../../assets/json/logo.json';

const Navbar = () => {
    const navItems = (
        <div className="uppercase text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Contact US
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Dashboard
            </NavLink>
            <NavLink to="/our-shop" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Our Shop
            </NavLink>
        </div>
    );

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData
    };
    return (
        <div>
            <div className="navbar max-w-screen-2xl fixed  z-10 bg-opacity-30 mx-auto  bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">Flavor|Flow</h1>
                        <div className="md:w-32 h-full">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
