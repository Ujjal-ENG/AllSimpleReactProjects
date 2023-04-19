import React, { createContext } from 'react';

export const AuthContext = createContext(null);
function AuthProviders({ children }) {
    return <div>{children}</div>;
}

export default AuthProviders;
