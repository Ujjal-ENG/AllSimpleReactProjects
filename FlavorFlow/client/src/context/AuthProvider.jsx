/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [privateLoad, setPrivateLoad] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    // create user
    const createUser = async (name, photo, email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            await signOut(auth);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('There was an error while creating user!!');
        }
    };

    const signInUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = async () => {
        await signOut(auth);
    };

    const singInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, async (user) => {
            setUserInfo(user);
            // get and set token
            if (user) {
                const { data } = await axios.post('http://localhost:8080/jwt', { email: user.email });
                localStorage.setItem('token', data.token);
                setPrivateLoad(false);
            }
        });
        return () => unSubscriber();
    }, []);

    const auths = {
        privateLoad,
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle,
        setLoading,
        setPrivateLoad,
        loading
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
