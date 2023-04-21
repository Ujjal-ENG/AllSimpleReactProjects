/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
function AuthProvide({ children }) {
    const [loading, setLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

    const createUser = async (email, password, name, url) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = user.user;
            await updateProfile(currentUser, {
                displayName: name,
                photoURL: url
            });
            setLoading(false);
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };
    const signInUser = async (email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const unsubscirber = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setPrivateLoad(false);
            setUserInfo(user);
        });
        return () => unsubscirber();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    console.log(userInfo);
    const auths = {
        privateLoad,
        createUser,
        signInUser,
        userInfo
    };

    return <AuthContext.Provider value={auths}> {children}</AuthContext.Provider>;
}

export default AuthProvide;
