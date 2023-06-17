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
    // const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    // create user
    const createUser = async (name, photo, email, password) => {
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            await signOut(auth);
        } catch (error) {
            console.log(error);

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
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);

            // get and set token
            if (currentUser) {
                axios.post('http://localhost:8080/jwt', { email: currentUser.email }).then((data) => {
                    localStorage.setItem('token', data.data.token);
                    setPrivateLoad(false);
                });
            } else {
                localStorage.removeItem('token');
                setPrivateLoad(false);
            }
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const auths = {
        privateLoad,
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle,

        setPrivateLoad
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
