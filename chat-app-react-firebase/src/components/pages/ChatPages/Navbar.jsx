/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { AuthContext } from '../../context-providers/AuthProviders';

function Navbar() {
    const { signOutUser, userInfo } = useContext(AuthContext);
    console.log(userInfo);
    return (
        <div className="flex justify-between items-center py-2 bg-black text-white rounded-t-sm">
            <h1 className="text-xl font-bold pl-2 ">Roy Chat</h1>
            <div className="flex items-center gap-2 pr-2">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={`${userInfo && userInfo.photoURL}`} alt="avatar" />
                    </div>
                </div>
                <h3 className="font-bold text-justify ">{userInfo && userInfo.displayName}</h3>
                <button onClick={() => signOutUser()} type="button" className="btn btn-xs">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;
