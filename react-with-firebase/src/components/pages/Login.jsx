/* eslint-disable indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import { Transition } from '@headlessui/react';
import { useState } from 'react';

function Login() {
    const [showForm, setShowForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulating login request delay
        setTimeout(() => {
            setIsLoading(false);
            setShowForm(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Transition
                        show={showForm}
                        enter="transition ease-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="********"
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    disabled={isLoading}>
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://             " viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />

                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm2-9.709c1.865 2.115 3 4.897 3 7.938h4c0-4.418-1.794-8.418-4.693-11.309l-2.307 2.371z"
                                                />
                                            </svg>
                                            Loading
                                        </div>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </div>
                        </form>
                    </Transition>

                    <Transition
                        show={!showForm}
                        enter="transition ease-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Welcome Back, Jane!</h2>
                            <p className="text-gray-700">You are now logged in to your account. Thank you for using our service!</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    );
}
export default Login;
