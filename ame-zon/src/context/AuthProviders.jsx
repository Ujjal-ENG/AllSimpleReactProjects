/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function AuthProviders({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    const [privateLoad, setPrivateLoad] = useState(true);

    const createUser = (email, password) => {
        setPrivateLoad(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const createUserWithGoogle = () => {
        setPrivateLoad(true);
        return signInWithPopup(auth, googleProvider);
    };

    const singOutTheUser = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUserInfo(null);
                toast.success('SignOut Successfully!!');
            })
            .catch((error) => {
                // An error happened.
                toast.error(error);
            });
    };

    const signInUser = (email, password) => {
        setPrivateLoad(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const stateChange = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
                setPrivateLoad(false);
                // ...
            }
        });
        return () => stateChange();
    }, [userInfo]);

    const authProviders = {
        userInfo,
        createUser,
        createUserWithGoogle,
        singOutTheUser,
        signInUser,
        privateLoad
    };
    return <AuthContext.Provider value={authProviders}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
