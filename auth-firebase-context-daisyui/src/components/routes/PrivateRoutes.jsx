/* eslint-disable react/jsx-no-useless-fragment */

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context-provider/AuthProviders';

function PrivateRoutes({ children }) {
    const { userInfo, loading } = useContext(AuthContext);
    if (loading) {
        console.log('mama kop kop');
        return <progress className="progress w-56" />;
    }

    return <>{userInfo ? children : <Navigate to="/login" />}</>;
}

export default PrivateRoutes;
