/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent */
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

function RegisterUser() {
    const { createUser, createUserWithGoogle, loading } = useContext(AuthContext);
    const navigate = useNavigate('');
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(loading);
    const { name, email, password } = newUser;
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        });
    };

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="rounded-full border-4 border-t-4 border-red-500 h-12 w-12 animate-spin" />
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading);
        try {
            await createUser(email, password)
                .then((userCredential) => {
                    // Signed in
                    const { user } = userCredential;
                    // ..
                    updateProfile(user, {
                        displayName: name
                    });

                    navigate('/shop');
                    setIsLoading(!isLoading);
                })
                .catch((error) => {
                    console.log(`Register User Error${error}`);
                    // ..
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignUpGoogle = async () => {
        setIsLoading(!isLoading);
        try {
            await createUserWithGoogle()
                .then(() => {
                    toast.success('User Created');
                })
                .catch((error) => {
                    console.log(`Register User Error Google: ${error}`);
                    // ...
                });
            navigate('/shop');
            setIsLoading(!isLoading);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Register
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <p>Already Have an Account?</p>
                                <div className="text-sm">
                                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Login?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or Register with</span>
                                    </div>
                                </div>

                                <div className="mt-6 ">
                                    <button
                                        type="button"
                                        onClick={handleSignUpGoogle}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 items-center gap-2">
                                        <FcGoogle className="text-3xl" />
                                        Register with Google
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;
