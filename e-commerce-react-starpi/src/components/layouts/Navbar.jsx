/* eslint-disable react/jsx-indent */
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdSelfImprovement } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex items-center shadow-2xl py-4 justify-between px-4 ">
            <section className="left space-x-4">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Country</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>USD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Men</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Women</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Children</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Accessories</NavLink>
            </section>
            <section className="middle">
                <h2 className="font-bold text-2xl">E-Com-Roy</h2>
            </section>
            <section className="right space-x-4 flex items-center">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>HomePage</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Contact</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>Stores</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    {' '}
                    <AiOutlineSearch className="text-2xl" />
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    {' '}
                    <MdSelfImprovement className="text-2xl" />
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    {' '}
                    <GiSelfLove className="text-2xl" />
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    {' '}
                    <div className="relative">
                        <HiOutlineShoppingCart className="text-2xl" />
                        <span className="absolute -top-3 -right-2 w-5 h-5 text-center inset-2 rounded-full bg-blue-700 text-white">0</span>
                    </div>
                </NavLink>
            </section>
        </nav>
    );
}

export default Navbar;
