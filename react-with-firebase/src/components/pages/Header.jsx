/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="text-4xl font-semibold flex justify-center items-center gap-10">
            <Link to="/">Home</Link>

            <Link to="/login">Login</Link>
        </div>
    );
}

export default Header;
