/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <a className="nav-link active" aria-current="page" href="#">
                    <img src="https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F1%2F2021%2F02%2F10%2Fuplyrn-logo-reverse.png" alt="logo" style={{ width: '200px' }} />
                </a>
                <a className="nav-link" href="#">
                    Online Courses
                </a>

                <a className="nav-link" href="#">
                    Teacher/Coach/Mentor
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
