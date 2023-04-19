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
    const [user, setUser] = useState(null);
    const [privateLoad, setPriveLoad] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        setPriveLoad(false);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                updateProfile(auth.currentUser, {
                    displayName: name
                });
                setLoading(false);

                // ...
            })
            .catch((error) => {
                // ..
            });
    };

    const signINUser = (email, password) => {
        setLoading(true);
        setPriveLoad(false);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                // ...
                setLoading(false);
            })
            .catch((error) => {});
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (currentUser) => {
            setPriveLoad(false);
            setUser(currentUser);
        });
        return () => subscriber();
    }, [user]);

    const auths = {
        loading,
        privateLoad,
        createUser,
        signINUser,
        user
    };
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
