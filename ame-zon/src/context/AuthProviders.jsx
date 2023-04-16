/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function AuthProviders({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const createUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                // ...

                setIsLoading(false);
                updateProfile(user, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                        console.log('profile name is updated');
                    })
                    .catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(`Register User Error${error}`);
                // ..
            });
    };

    const createUserWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('SingnInedIn');
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(`Register User Error Google: ${error}`);
                // ...
            });
    };

    const singOutTheUser = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUserInfo(null);
                toast.success('SignOut Successfully!!');
            })
            .catch((error) => {
                // An error happened.
                toast.error(error);
            });
    };

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in

                toast.success('Successfully Signed In!!!');
                // ...
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    useEffect(() => {
        const stateChange = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
                setPrivateLoad(false);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return () => stateChange();
    }, [userInfo]);

    const authProviders = {
        userInfo,
        createUser,
        createUserWithGoogle,
        loading,
        singOutTheUser,
        signInUser,
        privateLoad
    };
    return <AuthContext.Provider value={authProviders}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
