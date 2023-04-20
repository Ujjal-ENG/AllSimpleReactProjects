/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="px-4 py-3 shadow-lg my-5 max-w-7xl mx-auto">
            <div className="flex justify-between">
                <div className="flex items-center text-white">
                    <span className="font-semibold text-xl tracking-tight" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="text-2xl flex justify-center items-center gap-4">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            About
                        </NavLink>
                        <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Career
                        </NavLink>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                        </div>
                    </div>
                    <button className="btn btn-md text-white font-bold btn-ghost bg-gray-700 hover:text-gray-700">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
