/* eslint-disable react/jsx-indent */
import React from 'react';

function Navbar() {
    return (
        <div className="flex justify-between items-center py-2 bg-black text-white rounded-t-sm">
            <h1 className="text-xl font-bold pl-2 ">Roy Chat</h1>
            <div className="flex items-center gap-2 pr-2">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://picsum.photos/200/300" alt="avatar" />
                    </div>
                </div>
                <h3 className="font-bold text-justify ">Ujjal Roy</h3>
                <button type="button" className="btn btn-xs">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;
