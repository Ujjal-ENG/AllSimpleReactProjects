/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProviders({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                console.log(user);
                setUserInfo(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..
            });
    };

    const signUpUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                console.log(user);
                // ..
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const authInfo = {
        userInfo,
        createUser,
        signUpUser
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
