/* eslint-disable comma-dangle */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvide';

function LoginPage() {
    const location = useLocation();
    const { signInUser } = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const from = location.state?.from?.pathname || '/category';
    console.log(from);
    const { email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password);
        navigate(from, { replace: true });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-gray-100 max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-md shadow-sm">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="pb-10">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit" className="btn w-full btn-primary">
                            Login
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/register-page" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Don't have an account? Register
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
