/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

function RegisterPage() {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Create an Account
                            </button>

                            <div className="text-sm pt-5">
                                <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
                                    Already have an Account? Login please..
                                </Link>
                            </div>
                            <div className="flex items-center justify-center mt-6">
                                <div className="border-t border-gray-300 w-full" />
                                <div className="mx-3 text-gray-500 font-semibold">or</div>
                                <div className="border-t border-gray-300 w-full" />
                            </div>

                            <div className="flex items-center justify-center mt-6">
                                <button
                                    type="button"
                                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <FaFacebook className="w-5 h-5 mr-2" />
                                    Sign in with Facebook
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <FaGoogle className="w-5 h-5 mr-2" />
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default RegisterPage;
