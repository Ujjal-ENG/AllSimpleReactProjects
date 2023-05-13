import React from 'react';
import Img from '../../../assets/ErrorPage.png';
import Navbar from './Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <img src={Img} alt="error-page" />
        </div>
    );
};

export default ErrorPage;
