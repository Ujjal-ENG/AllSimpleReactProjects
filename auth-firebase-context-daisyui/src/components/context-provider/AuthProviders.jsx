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
    const [loading, setLoading] = useState(true);

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

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.log('Error signing out:', error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        userInfo,
        createUser,
        signUpUser,
        signOutUser,
        loading
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
