/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="text-3xl font-bold flex justify-center items-center gap-6 py-3 shadow-lg bg-red-200">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Login
            </NavLink>

            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Register
            </NavLink>
        </nav>
    );
}

export default Navbar;
