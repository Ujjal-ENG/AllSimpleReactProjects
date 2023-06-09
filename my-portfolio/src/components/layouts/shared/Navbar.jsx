/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = (
        <div className="uppercase text-inherit text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5">
            <NavLink to="/" className={(isActive) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
            <NavLink to="/about" className={(isActive) => (isActive ? 'active' : 'default')}>
                About
            </NavLink>
            <NavLink to="/project" className={(isActive) => (isActive ? 'active' : 'default')}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={(isActive) => (isActive ? 'active' : 'default')}>
                Contact
            </NavLink>
            <a
                href="https://drive.google.com/file/d/1sdPY5IvLERjrdz9UDPkQwWJ2TIwTzb5Z/view?usp=sharing"
                target="_blank"
                type="button"
                className="btn btn-outline btn-xs text-inherit font-bold sm:btn-sm md:btn-md lg:btn-lg"
                rel="noreferrer">
                Download my Resume
            </a>
        </div>
    );

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 28 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <div>
            <div
                className={`z-10 navbar shadow-xl  duration-200 transition-all px-20 ${
                    isScrolled ? 'ease-out fixed bg-opacity-100 mx-auto text-white bg-black' : 'fixed  bg-white text-black py-3 ease-in bg-opacity-30'
                }`}>
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
                        <h1 className="text-inherit text-2xl font-bold">My|PortFolio</h1>
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
