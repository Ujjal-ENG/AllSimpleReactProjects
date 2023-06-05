import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './assets/404.gif';

const ErrorPage = () => {
    return (
        <div className="flex h-screen justify-center items-center w-full flex-col">
            <img src={errorImg} alt="" />

            <Link to="/" className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg text-xl font-bold">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
