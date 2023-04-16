import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

function PrivateRoute({ children }) {
    const { userInfo } = useContext(AuthContext);

    if (userInfo) {
        return children;
    }
    return <Navigate to="/login" />;
}

export default PrivateRoute;
