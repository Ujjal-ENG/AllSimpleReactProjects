/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from '../layouts/Navbar';

function Login() {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData((ps) => ({
            ...ps,
            [e.target.id]: e.target.value
        }));
    };
    const from = location?.state?.form?.pathname;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(formData.email, formData.password);
        navigate(from || '/', { replace: true });
    };
    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center   py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                                    Forgot your password?
                                </Link>
                            </div>
                            <div className="text-sm">
                                <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
                                    Are you New? Register Please..
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Sign in
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-4">
                            <span className="text-sm text-gray-600">Or sign in with</span>
                            <div className="flex mt-2">
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
        </div>
    );
}

export default Login;
