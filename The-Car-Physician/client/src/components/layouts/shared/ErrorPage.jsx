import React from 'react';
import Img from '../../../assets/ErrorPage.png';
import useTitle from '../../../hooks/useTitle';
import Navbar from './Navbar';

const ErrorPage = () => {
    useTitle('Error Occurs!');
    return (
        <div>
            <Navbar />
            <img src={Img} alt="error-page" />
        </div>
    );
};

export default ErrorPage;
