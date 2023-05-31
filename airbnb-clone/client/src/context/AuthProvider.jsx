/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
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
    //  create user
    const createUser = async (name, photo, email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            toast.success('User is Created Successfully!!!');
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
            console.log(error.error);
            toast.error('Error occured while user try to SignIn with Google!!');
        }
    };

    const resetPassword = async (email) => {
        setLoading(true);
        setPrivateLoad(false);
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Please open your email and Reset Your password with your link!!');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('Error occurred while user try to Reset their passsword!!');
        }
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setPrivateLoad(false);
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
        loading,
        resetPassword
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
