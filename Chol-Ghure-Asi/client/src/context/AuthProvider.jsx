import { getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../config/firebse';

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    return <AuthContext.Provider value={4}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
