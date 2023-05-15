/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/Group 1329.png';

function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={logo} alt="logo" className="mx-auto" />
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form className="flex flex-col space-y-4 mb-6">
                    <div>
                        <label className="block font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm input input-bordered"
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm input input-bordered"
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    </div>
                    <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">
                        Login
                    </button>
                </form>
                <Link to="/register" className="py-6 mt-4 font-bold text-warning">
                    Don't have any Account? Please Register..
                </Link>
                <div className="mt-4 flex items-center justify-center">
                    <hr className="w-full border-gray-400" />
                    <span className="mx-2 font-medium text-gray-500">or</span>
                    <hr className="w-full border-gray-400" />
                </div>
                <button
                    type="button"
                    className="mt-4 flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <h1 className="w-6 h-6 mr-2">G</h1>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
