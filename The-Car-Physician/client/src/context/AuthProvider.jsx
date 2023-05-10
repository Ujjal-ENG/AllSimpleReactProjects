import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const auths = {};
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
