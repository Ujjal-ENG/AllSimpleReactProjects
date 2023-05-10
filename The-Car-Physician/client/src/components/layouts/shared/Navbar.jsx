/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import { Link, NavLink, useNavigation } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { userInfo, logOut } = useContext(AuthContext);

    const navItems = (
        <div className="flex flex-col md:flex-row md:justify-evenly  items-center gap-10 text-xl font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {userInfo ? (
                <button type="button" onClick={() => logOut()}>
                    Logout
                </button>
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
        </div>
    );
    const { state } = useNavigation();
    if (state === 'loading') {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return (
        <div className="py-10">
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
                    <img src={logo} alt="logo" className="md:w-[200px] md:h-[80px] w-20 h-10 object-cover" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="navbar-end space-x-5">
                    <BsHandbag className="text-2xl cursor-pointer" />
                    <BiSearch className="text-2xl cursor-pointer" />
                    <Link to="/login" className="btn btn-outline text-xl font-bold text-orange-500">
                        Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
