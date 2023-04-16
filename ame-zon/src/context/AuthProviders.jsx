import React, { createContext } from 'react';

export const AuthContext = createContext({});
// const auth = getAuth();
function AuthProviders({ children }) {
    const user = 'Komkom';
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
