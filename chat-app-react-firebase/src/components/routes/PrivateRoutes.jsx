/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context-providers/AuthProviders';

function PrivateRoutes({ children }) {
    const { userInfo, privateLoad } = useContext(AuthContext);
    if (userInfo) {
        return children;
    }
    if (privateLoad) {
        return <progress className="progress w-56" />;
    }
    return (
        <div>
            <Navigate to="/login" replace />
        </div>
    );
}

export default PrivateRoutes;
