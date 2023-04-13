/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex text-2xl font-bold justify-center items-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;
