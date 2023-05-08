import React from 'react';
import { useNavigation } from 'react-router-dom';
import NavImg from '../../assets/Group 2.png';

const Navbar = () => {
    const { state } = useNavigation();
    if (state === 'loading') {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="border border-gray-200 rounded-full p-5">
                    <div className="w-12 h-12 border-t-4 border-b-4 border-green-500 rounded-full animate-spin" />
                </div>
            </div>
        );
    }
    return <img src={NavImg} alt="navimg" className="w-full object-cover h-[10vh]" />;
};

export default Navbar;
