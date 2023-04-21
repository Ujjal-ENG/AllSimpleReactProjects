/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvide';

function RegisterPage() {
    const { createUser } = useContext(AuthContext);
    const [error, setErrors] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        password: ''
    });
    const { name, email, photo, password } = user;
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });

        const errors = [];

        if (e.target.id === 'password') {
            const { value } = e.target;

            if (value.length < 8) {
                errors.push('Password must be at least 8 characters long.');
            }

            if (!/\d/.test(value)) {
                errors.push('Password must contain at least one number.');
            }

            if (!/[a-z]/.test(value)) {
                errors.push('Password must contain at least one lowercase letter.');
            }

            if (!/[A-Z]/.test(value)) {
                errors.push('Password must contain at least one uppercase letter.');
            }

            if (!/[^a-zA-Z0-9]/.test(value)) {
                errors.push('Password must contain at least one special character.');
            }
        }

        setErrors(errors);
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password, name, photo);
        navigate('/login');
    };

    const showSuccessMessage = error.length === 0 && password.length > 0;
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={name}
                                onChange={handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="photo" className="sr-only">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                name="photo"
                                type="url"
                                autoComplete="photo"
                                value={photo}
                                onChange={handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Photo URL"
                            />
                        </div>
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
                        <div>
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
                            {error.length > 0 && (
                                <div className="error text-red-500">
                                    {error.map((error, index) => (
                                        <div key={index}>{error}</div>
                                    ))}
                                </div>
                            )}
                            {showSuccessMessage && <p className="text-green-500">Your password is very secure now!!</p>}
                        </div>
                        <div className="flex items-center">
                            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I accept the
                                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Term and Contions{' '}
                                </a>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M3.707,10.293c-0.391,0.391 -0.391,1.023 0,1.414l6.364,6.364c0.391,0.391 1.023,0.391 1.414,0l6.364,-6.364c0.391,-0.391 0.391,-1.023 0,-1.414s-1.023,-0.391 -1.414,0l-5.657,5.657l-5.657,-5.657c-0.391,-0.391 -1.023,-0.391 -1.414,0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
