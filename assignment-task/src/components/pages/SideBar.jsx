/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile col-span-1 border-2">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <NavLink to="/text">Test</NavLink>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
