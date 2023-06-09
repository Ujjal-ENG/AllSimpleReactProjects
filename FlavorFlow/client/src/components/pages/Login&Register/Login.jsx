/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import img from '../../../assets/others/authentication2.png';
import { AuthContext } from '../../../context/AuthProvider';
import './styles.css';

const Login = () => {
    const { signInUser, singInGoogle, setPrivateLoad, privateLoad } = useContext(AuthContext);
    const [error, setError] = useState('');
    const captchRef = useRef(null);
    const [isClicked, setIsClicked] = useState(true);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            signInUser(email, password);
            navigate(from, { replace: true });
            toast.success('User is Logged in Successfully!!!');
            setPrivateLoad(false);
        } catch (error) {
            console.log(error);

            toast.error('There was an error while signIn user!!');
            setPrivateLoad(false);
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            const result = await singInGoogle();
            const { user } = result;
            navigate(from, { replace: true });

            toast.success('Successfully Logged In');

            axios.post('http://localhost:8080/users', { name: user?.displayName, email: user?.email });
            setPrivateLoad(false);
        } catch (error) {
            console.log(error);
            setPrivateLoad(false);
        }
    };

    const handleCaptcha = () => {
        const captcha = captchRef.current.value;
        if (validateCaptcha(captcha)) {
            setError('Captcha Matched');
            setIsClicked(false);
        } else {
            setError('Captcha Does Not Match');
            setIsClicked(true);
            captchRef.current.value = '';
        }
    };
    return (
        <section className="bg-white container h-screen">
            <div className="grid grid-cols-1  lg:grid-cols-2">
                <div data-aos="fade-right" className="flex justify-center container shadow-2xl max-w-2xl mx-auto items-center">
                    <img src={img} alt="login-img" />
                </div>
                <div data-aos="fade-left" className="flex items-center container  justify-center px-4 py-10 bg-white ">
                    <div className="container shadow-2xl py-5 max-w-4xl">
                        <div className="mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to Celebration</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don't have an account?
                                <Link to="/register" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                                    Sign Up
                                </Link>
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email to get started"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                required
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Captcha
                                        </label>

                                        <div className="justify-end flex">
                                            <LoadCanvasTemplate />
                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>

                                            <input
                                                required
                                                onBlurCapture={handleCaptcha}
                                                ref={captchRef}
                                                type="text"
                                                name="captcha"
                                                id="captcha"
                                                placeholder="Enter your Captcha from above!!"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        {error && isClicked && <h1 className="py-3 text-red-500 font-bold">{error}</h1>}
                                        {error && !isClicked && <h1 className="py-3 text-green-500 font-bold">{error}</h1>}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                            disabled={isClicked}>
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                {privateLoad ? (
                                    <button
                                        type="button"
                                        className="btn relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none loading">
                                        loading | Please Wait
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                                        <div className="absolute inset-y-0 left-0 p-4">
                                            <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                                            </svg>
                                        </div>
                                        Sign up with Google
                                    </button>
                                )}

                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-[#2563EB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                        </svg>
                                    </div>
                                    Sign up with Facebook
                                </button>
                            </div>

                            <p className="mt-5 text-sm text-gray-600">
                                This site is protected by reCAPTCHA and the Google
                                <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                                    Privacy Policy
                                </a>
                                &
                                <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                                    Terms of Service
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
