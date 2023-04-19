/* eslint-disable default-case */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext({});
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
function AuthProviders({ children }) {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUser] = useState(null);
    const [privateLoad, setPriveLoad] = useState(true);

    const createUser = async (email, password, name, url) => {
        setLoading(true);
        setPriveLoad(false);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, url);

            uploadTask.on(
                (error) => {
                    // Handle unsuccessful uploads
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: name,
                            photoURL: downloadURL
                        });
                    });
                }
            );

            await setDoc(doc(db, 'users', res.user.uid), {
                uid: res.user.uid,
                name,
                email,
                url
            });

            await setDoc(doc(db, 'userChats', res.user.uid), {});

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const signINUser = async (email, password) => {
        setLoading(true);
        setPriveLoad(false);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const { user } = userCredential;
                // ...
                setLoading(false);
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signOutUser = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (currentUser) => {
            setPriveLoad(false);
            setUser(currentUser);
        });
        return () => subscriber();
    }, [userInfo]);
    if (loading) {
        return <progress className="progress w-56" />;
    }
    const auths = {
        loading,
        privateLoad,
        createUser,
        signINUser,
        userInfo,
        signOutUser
    };
    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
