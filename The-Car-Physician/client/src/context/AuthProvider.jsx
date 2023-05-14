/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

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

            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            await signOut(auth);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are Successfully Registered!!',
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
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
        } catch (error) {
            console.log(error);
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    };

    // google signIn
    const googleSignIn = async () => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            await signInWithPopup(auth, googleProvider);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are Successfully Logged in with Gmail!!',
                showConfirmButton: false,
                timer: 1500
            });

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    };

    // LoggedOutUser
    const logOut = async () => {
        setLoading(true);
        setPrivateLoad(true);
        try {
            signOut(auth);
            navigate('/login');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are Successfully Logged Out!!',
                showConfirmButton: false,
                timer: 1500
            });

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        }
    };

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser && currentUser.email) {
                const { data } = await axios.post('https://the-car-physician-server.vercel.app/jwt', { email: currentUser.email });

                localStorage.setItem('token', data.token);
            } else {
                localStorage.removeItem('token');
            }
            setPrivateLoad(false);
            setUserInfo(currentUser);
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
        googleSignIn,
        logOut
    };
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
