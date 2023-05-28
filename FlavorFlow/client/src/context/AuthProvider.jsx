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
            await axios.post('http://localhost:8080/users', { name, email });

            await signOut(auth);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('There was an error while creating user!!');
        }
    };

    const signInUser = async (email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('User is Logged in Successfully!!!');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('There was an error while signIn user!!');
        }
    };

    const logOutUser = async () => {
        await signOut(auth);
    };

    const singInGoogle = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success('Successfully Logged In');
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error('Error occured while user try to SignIn with Google!!');
        }
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setPrivateLoad(false);
        });
        return () => unSubscriber();
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
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
