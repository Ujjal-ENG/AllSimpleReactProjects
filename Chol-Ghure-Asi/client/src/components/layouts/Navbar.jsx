/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdLuggage } from 'react-icons/md';
import { TbArrowLoopLeft } from 'react-icons/tb';
import { Link, NavLink, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Navbar() {
    const { userInfo, logOutUser } = useContext(AuthContext);
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return (
        <nav className="px-10 py-3 text-white flex justify-between items-center gap-14">
            <Link to="/" className=" flex">
                <MdLuggage className="text-7xl" />
                <div className="flex justify-center items-start flex-col">
                    <h3 className="text-2xl font-bold">Chol Ghure</h3>
                    <h4 className="text-xl font-semibold">Asi</h4>
                </div>
                <TbArrowLoopLeft className="text-4xl" />
            </Link>

            <div className="flex-1 flex justify-between gap-20">
                <div className="form-control flex-shrink-0">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Your Destination"
                            className="
        input
        border-2 border-white
        bg-gray-800
        opacity-80
        text-white
        placeholder-white
        px-4 py-2
        rounded-md
        focus:outline-none
        focus:shadow-outline-blue
        focus:border-blue-500
       text-center
        sm:w-auto
        sm:pr-16
        placeholder:px-4 w-full
      "
                        />

                        <BsSearch className="text-2xl absolute top-2.5 left-1" />
                    </div>
                </div>

                <div className="text-2xl flex-1 flex justify-evenly items-center">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Home
                    </NavLink>
                    <NavLink to="/travel-destination" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Destination
                    </NavLink>
                    <NavLink to="/travel-blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Contact Us
                    </NavLink>
                    {!userInfo && (
                        <Link to="/login" className="btn btn-warning btn-md">
                            Login
                        </Link>
                    )}
                    {userInfo && (
                        <Link to="/" className="btn btn-warning btn-md" onClick={() => logOutUser()}>
                            Logout
                        </Link>
                    )}
                    <h4 className="hover-stroke text-3xl font-bold text-white uppercase">{userInfo && userInfo.displayName}</h4>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
