/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext({});
const auth = getAuth(app);
function AuthProviders({ children }) {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUser] = useState(null);
    const [privateLoad, setPriveLoad] = useState(true);

    const createUser = async (email, password, name) => {
        setLoading(true);
        setPriveLoad(false);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                updateProfile(auth.currentUser, {
                    displayName: name
                });
                setLoading(false);
                console.log(user);
                // ...
            })
            .catch((error) => {
                // ..
                console.log(error);
            });
    };

    const signINUser = async (email, password) => {
        setLoading(true);
        setPriveLoad(false);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                // ...
                setLoading(false);
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (currentUser) => {
            setPriveLoad(false);
            setUser(currentUser);
        });
        return () => subscriber();
    }, [userInfo]);
    if (loading) {
        return <progress className="progress w-56" />;
    }
    const auths = {
        loading,
        privateLoad,
        createUser,
        signINUser,
        userInfo
    };
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
