/* eslint-disable react/jsx-indent */
import React from 'react';

function Search() {
    return (
        <div className="bg-gray-600 h-fit">
            <input type="text" placeholder="Find a User" className="input  outline-none border-t-0 border-r-0 border-l-0 input-success w-full rounded-none border-2" />

            <div className="flex items-start gap-2 p-2 my-3 border-b-2 border-b-red-400">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-justify text-white">Ujjal Roy</h3>
                    <p className="text-xs text-white">Kopa mama kopa</p>
                </div>
            </div>
            <div className="flex items-start gap-2 p-2 my-3 border-b-2 border-b-red-400">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-justify text-white">Ujjal Roy</h3>
                    <p className="text-xs text-white">Kopa mama kopa</p>
                </div>
            </div>
        </div>
    );
}

export default Search;
