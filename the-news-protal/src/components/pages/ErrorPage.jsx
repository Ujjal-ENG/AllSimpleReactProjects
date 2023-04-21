/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-md text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
                <p className="text-lg mb-8">Something went wrong. Please try again later.</p>
                <button
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
                    onClick={handleClick}>
                    Back to Home Page!!!
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;
