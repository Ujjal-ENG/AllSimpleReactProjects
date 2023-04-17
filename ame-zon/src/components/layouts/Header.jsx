/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent */

import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import { AuthContext } from '../../context/AuthProviders';

function Header() {
    const { userInfo, singOutTheUser } = useContext(AuthContext);
    // const { displayName } = userInfo || {};
    // console.log(displayName);
    return (
        <header className="bg-violet-600 p-3 text-white fixed top-0 right-0 left-0 z-40">
            <nav className="flex justify-between items-center mx-20 ">
                <NavLink to="/">
                    <img src={Logo} alt="Ame-Jon" />
                </NavLink>

                <ul className="flex justify-around items-center text-xl gap-6 font-bold">
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order-review">Order Review</NavLink>
                    <NavLink to="*">Management Inventory</NavLink>
                    {!userInfo ? (
                        <NavLink to="/login">Login</NavLink>
                    ) : (
                        <button type="button" onClick={() => singOutTheUser()}>
                            SingOut
                        </button>
                    )}
                    <p className="text-red-600"> {userInfo && userInfo.displayName}</p>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
