/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function AuthProviders({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setIsLoading] = useState(false);
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
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { user } = result;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(`newUser in Google: ${user}`);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(`Register User Error Google: ${error}`);
                // ...
            });
    };

    useEffect(() => {
        const stateChange = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
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
        loading
    };
    return <AuthContext.Provider value={authProviders}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
