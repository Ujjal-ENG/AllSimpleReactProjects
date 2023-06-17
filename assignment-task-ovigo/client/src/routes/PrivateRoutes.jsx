import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useContext(AuthContext);
    const { pathname } = useLocation();

    if (userInfo) {
        return children;
    }
    if (privateLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return <Navigate to="/login" state={{ from: pathname }} />;
};

export default PrivateRoutes;
