import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context-provider/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const { userInfo } = useContext(AuthContext);

    if (userInfo) {
        return children;
    }
    console.log(userInfo);
    return <Navigate to="/login" replace={true} />;
};

export default PrivateRoutes;
