/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = (
        <div className="flex justify-evenly items-center text-2xl font-bold">
            <NavLink>Home</NavLink>
            <NavLink>Donation</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>Blog</NavLink>
        </div>
    );
    return (
        <div className="navbar bg-base-100">
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
                <button type="button" className="btn btn-ghost normal-case text-xl">
                    daisyUI
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                <button type="button" className="btn btn-info">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Navbar;
