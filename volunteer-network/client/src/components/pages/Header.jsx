/* eslint-disable react/jsx-indent-props */
import React from 'react';

const Header = () => {
    return (
        <div className="text-center -mt-16 text-black ">
            <div className=" w-full mx-auto">
                <div className="flex h-screen flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                    <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block opacity-10 absolute inset-0"
                        src="https://images.pexels.com/photos/6591433/pexels-photo-6591433.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <div className="flex justify-center items-center relative z-10 w-full">
                        <div className="w-full">
                            <h1 className="mb-5 text-4xl font-bold">I grow by helping people in need.</h1>
                            <div className="flex items-center justify-center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
