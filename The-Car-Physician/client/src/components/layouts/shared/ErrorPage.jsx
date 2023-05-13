import React from 'react';
import Img from '../../../assets/ErrorPage.png';
import useTitle from '../../../hooks/useTitle';
import Navbar from './Navbar';

const ErrorPage = () => {
    useTitle('Error Occurs!');
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Navbar />
            <img src={Img} alt="error-page" className="max-w-3xl mx-auto" />
        </div>
    );
};

export default ErrorPage;
