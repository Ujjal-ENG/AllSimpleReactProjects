/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInGoogle, signInUser, privateLoad, resetPassword } = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            signInUser(email, password);
            toast.success('User is Logged in Successfully!!!');
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error);
            toast.error('There was an error while signIn user!!');
        }
    };
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        try {
            singInGoogle();
            toast.success('Successfully Logged In with Email');
            navigate(from, { replace: true });
        } catch (error) {
            console.log(error.error);
            toast.error('Error ocurred while user try to SignIn with Google!!');
        }
    };

    const handleResetPassword = () => {
        resetPassword(emailRef.current.value);
        navigate(from, { replace: true });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Log In</h1>
                    <p className="text-sm text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email address
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="bg-rose-500 w-full rounded-md py-3 text-white">
                            {privateLoad ? <TbFidgetSpinner size={24} className="animate-spin m-auto" /> : 'Continue'}
                        </button>
                    </div>
                </form>
                <div className="space-y-1">
                    <button onClick={handleResetPassword} className="text-xs hover:underline hover:text-rose-500 text-gray-400">
                        Forgot password?
                    </button>
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" />
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" />
                </div>
                <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className="px-6 text-sm text-center text-gray-400">
                    Don't have an account yet?
                    <Link to="/signup" className="hover:underline hover:text-rose-500 text-gray-600">
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;
