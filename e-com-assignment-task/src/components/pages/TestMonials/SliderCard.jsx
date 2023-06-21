/* eslint-disable react/jsx-indent-props */
import React from 'react';

const SliderCard = () => {
    return (
        <div className="md:w-[220px] w-full">
            <div className="w-full md:w-[298px] h-auto bg-[#416F75] text-white py-5 px-3 rounded-md">
                <div className="h-20 w-20  mx-auto">
                    <img
                        alt="testimonial"
                        className="w-full h-full mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
                <div className="h-full text-center">
                    <h2 className="text-gray-900 font-bold  title-font tracking-wider text-xl">HOLDEN CAULFIELD</h2>
                    <p className="text-white">Senior Product Designer</p>
                    <span className="inline-block h-1 w-20 rounded bg-indigo-400 mt-6 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Subject of Expertise</h3>
                    <p className="text-white">MERN Stack</p>
                    <p className="text-white">Leadership</p>
                    <p className="text-white">Motivation</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
