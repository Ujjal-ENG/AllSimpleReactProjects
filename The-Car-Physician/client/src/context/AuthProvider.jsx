/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    // create user
    const createUser = async (name, photo, email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(user.currentUser, {
                displayName: name,
                photoURL: photo
            });
            signOut(auth);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'You are Successfully Registered!!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    };

    // signInUser
    const signInUser = async (email, password) => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
        } catch (error) {}
    };
    useEffect(() => {
        try {
            onAuthStateChanged(auth, (currentUser) => {
                setPrivateLoad(false);
                setUserInfo(currentUser);
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    }, []);

    const auths = {
        privateLoad,
        userInfo,
        createUser
    };
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
