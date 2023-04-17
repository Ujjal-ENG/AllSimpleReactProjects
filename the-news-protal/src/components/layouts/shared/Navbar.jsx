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
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <button className="btn btn-sm btn-ghost bg-gray-700">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
