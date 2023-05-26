/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        // Logic to determine the active page on component mount
        setActivePage(window.location.hash);
    }, [activePage]);

    console.log(activePage);
    const navItems = (
        <div className="uppercase text-inherit text-xl md:text-2xl flex md:flex-row flex-col items-center gap-5">
            <a href="#home" className="focus:text-violet-500 ">
                {' '}
                Home
            </a>
            <a href="#about" className="active:text-violet-500 ">
                {' '}
                About
            </a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 88 && !isScrolled) {
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
                className={`z-10 navbar  duration-200 transition-all ${
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
