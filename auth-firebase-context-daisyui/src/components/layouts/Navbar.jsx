/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context-provider/AuthProviders';

function Navbar() {
    const { userInfo } = useContext(AuthContext);

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
            {userInfo && <h3 className="text-red-500">Welcome {userInfo.displayName}</h3>}
            {userInfo && (
                <button className="btn btn-secondary" type="button">
                    Signout
                </button>
            )}
        </nav>
    );
}

export default Navbar;
