/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProviders({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    const createUser = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                console.log(user);
                setUserInfo(user);

                updateProfile(user, {
                    displayName: username
                });
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
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        userInfo,
        createUser,
        signUpUser
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
