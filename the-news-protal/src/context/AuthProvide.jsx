/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
function AuthProvide({ children }) {
    const [loading, setLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

    const createUser = async (email, password, name) => {
        setLoading(true);
        setLoading(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, {
                displayName: name
            });
            setLoading(false);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };
    const signInUser = async (email, password) => {
        setLoading(true);
        setLoading(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            console.log(user);
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

    const auths = {
        privateLoad,
        createUser,
        signInUser,
        userInfo
    };

    return <AuthContext.Provider value={auths}> {children}</AuthContext.Provider>;
}

export default AuthProvide;
