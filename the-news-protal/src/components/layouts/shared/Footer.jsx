/* eslint-disable react/jsx-indent */

import React from 'react';

function Footer() {
    return (
        <footer className="bg-black py-8 text-white">
            {' '}
            <div className="flex justify-center">
                <img className="w-16 h-16 rounded-full mr-3" src="https://github.com/Ujjal-ENG.png" alt="Ujjal Kumar Roy" />
                <div>
                    <h4 className="font-bold text-xl">Ujjal Kumar Roy</h4>
                    <p className="text-gray-400 text-sm">Full Stack Developer | Open-Source Contributor</p>
                </div>
            </div>
            <hr className="my-8 border-gray-500" />
            <div className="text-center text-sm">
                <p className="mt-6 text-xs">&copy; Ujjal Kumar Roy | All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
