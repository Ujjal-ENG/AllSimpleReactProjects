/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

function PrivateRoute({ children }) {
    const { userInfo, privateLoad } = useContext(AuthContext);
    const location = useLocation();
    console.log(location, privateLoad);

    if (userInfo) {
        return children;
    }
    if (privateLoad) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="rounded-full border-4 border-t-4 border-red-500 h-12 w-12 animate-spin" />
            </div>
        );
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
