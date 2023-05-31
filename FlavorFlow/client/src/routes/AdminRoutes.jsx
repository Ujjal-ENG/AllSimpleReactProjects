import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminOnlyRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const { pathname } = useLocation();
    console.log(pathname);
    if (userInfo && isAdmin) {
        return children;
    }
    if (privateLoad || isAdminLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }
    return <Navigate to="/login" state={{ from: pathname }} />;
};

export default AdminOnlyRoutes;
