/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvide';

function Navbar() {
    const { userInfo, singOutUser } = useContext(AuthContext);
    const handleSignout = () => {
        singOutUser();
    };
    return (
        <nav className="px-4 py-3 shadow-lg my-5 max-w-7xl mx-auto flex flex-wrap md:justify-between md:items-center">
            <div className="flex items-center text-white mb-4 md:mb-0">
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
                        <img src={userInfo ? userInfo.photoURL : 'https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="avatar" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold">{userInfo && userInfo.displayName}</h3>
                <Link to={!userInfo && '/login'} onClick={userInfo && handleSignout} className="btn btn-md text-white font-bold btn-ghost bg-gray-700 hover:text-gray-700">
                    {userInfo ? 'Logout' : 'Login'}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
