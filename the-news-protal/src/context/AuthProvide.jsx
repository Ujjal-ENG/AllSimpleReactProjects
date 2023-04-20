/* eslint-disable react/jsx-one-expression-per-line */
import React, { createContext } from 'react';

export const AuthContext = createContext(null);
function AuthProvide({ children }) {
    const a = 2;
    return <AuthContext.Provider value={a}> {children}</AuthContext.Provider>;
}

export default AuthProvide;
