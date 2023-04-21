/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvide';

function PrivateRoutes({ children }) {
    const location = useLocation();
    const { privateLoad, userInfo } = useContext(AuthContext);

    if (privateLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    if (userInfo) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} />;
}

export default PrivateRoutes;
