/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import app from '../config/firebse';

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const crearteUser = async (name, email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.currentUser, {
                displayName: name
            });
            signOut(auth);
            setIsLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            toast.error('There was an error while creating user!!');
        }
    };

    const signInUser = async (email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('There was an error while signIn user!!');
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
        crearteUser,
        signInUser
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
