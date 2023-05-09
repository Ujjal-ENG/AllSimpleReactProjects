/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Parts from '../../../assets/images/about_us/parts.jpg';
import Person from '../../../assets/images/about_us/person.jpg';

const AboutUs = () => {
    return (
        <div className="flex justify-between items-start py-32 gap-36">
            <div className="relative">
                <img src={Person} alt="person" className=" w-[460px] h-[473px] rounded-xl" />
                <img src={Parts} alt="parts" className="absolute -bottom-20 -right-14 w-[327px] h-[333px] rounded-xl border-[10px] border-white" />
            </div>
            <div className="flex-1 space-y-9">
                <h3 className="text-orange-600 text-xl font-bold text-start">About Us</h3>
                <h1 className="text-5xl font-bold tracking-wider max-w-md">We are qualified & of experience in this field</h1>
                <p className="text-gray-500 tracking-widest max-w-lg">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                    even slightly believable.
                </p>
                <p className="text-gray-500 tracking-widest max-w-lg">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button type="button" className="btn bg-orange-500 border-none text-white">
                    Get More Info
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
