/* eslint-disable no-return-await */
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
    const [userInfo, setUserInfo] = useState(null);

    //  create user
    const createUser = async (name, photo, email, password) => {
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            toast.success('User is Created Successfully!!!');
            await signOut(auth);
        } catch (error) {
            console.log(error);
            toast.error('There was an error while creating user!!');
        }
    };

    const signInUser = async (email, password) => {
        setPrivateLoad(true);
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = async () => {
        await signOut(auth);
    };

    const singInGoogle = async () => {
        setPrivateLoad(true);
        return await signInWithPopup(auth, googleProvider);
    };

    const resetPassword = async (email) => {
        setPrivateLoad(false);
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Please open your email and Reset Your password with your link!!');
        } catch (error) {
            console.log(error);

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
        resetPassword
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
