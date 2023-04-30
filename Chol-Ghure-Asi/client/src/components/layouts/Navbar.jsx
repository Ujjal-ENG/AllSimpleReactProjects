/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { MdLuggage } from 'react-icons/md';
import { TbArrowLoopLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="px-10 py-3 text-white">
            <Link className="flex">
                <MdLuggage className="text-7xl" />
                <div className="flex justify-center items-start flex-col">
                    <h3 className="text-2xl font-bold">Chol Ghure</h3>
                    <h4 className="text-xl font-semibold">Asi</h4>
                </div>
                <TbArrowLoopLeft className="text-4xl" />
            </Link>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
