/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Time from '../../../assets/icons/Group 38729.svg';
import Wrench from '../../../assets/icons/Wrench.svg';
import Guranty from '../../../assets/icons/check.svg';
import Delviery from '../../../assets/icons/deliveryt.svg';
import Team from '../../../assets/icons/group.svg';
import Person from '../../../assets/icons/person.svg';

const Features = () => {
    return (
        <div>
            <h3 className="text-orange-600 text-xl font-bold text-center">Core Features</h3>
            <h1 className="text-5xl font-bold tracking-wider text-center py-5">Why Choose Us</h1>
            <p className="text-gray-500 tracking-widest text-center mx-auto max-w-3xl">
                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            <div className="grid grid-cols-6 justify-items-center gap-4 pt-12">
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Team} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">Expert Team</h3>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Time} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">Priority Time</h3>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Person} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">24/7 Support</h3>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Wrench} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">Best Equipment</h3>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Guranty} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">100% Guranty</h3>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 border rounded-xl p-8 duration-200 transition-all ease-in-out hover:bg-orange-600 hover:text-white">
                    <img src={Delviery} alt="team" />
                    <h3 className=" text-xl font-bold text-center ">100% Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;
