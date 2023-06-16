/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-black relative pb-40">
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
                <div className="col-span-2 z-10 w-full  p-10">
                    <h1 className="text-2xl font-semibold tracking-wider py-4 text-white">Never miss a thing.</h1>
                    <div className="join max-w-xl w-full">
                        <input className="input input-bordered rounded-full join-item  w-full" placeholder="Email" />
                        <button type="button" className="btn join-item rounded-full">
                            Subscribe
                        </button>
                    </div>
                    <h1 className="text-xl font-semibold tracking-wider py-4 text-white">Be in Touch</h1>
                    <div className="flex items-center gap-4 cursor-pointer">
                        <AiFillFacebook size={32} className="text-white" />
                        <AiOutlineWhatsApp size={32} className="text-white" />
                        <AiFillLinkedin size={32} className="text-white" />
                        <AiFillYoutube size={32} className="text-white" />
                        <AiFillInstagram size={32} className="text-white" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold tracking-wider  text-white pt-14 pb-7">Never miss a thing.</h1>
                    <div className="text-white text-xl tracking-wide flex justify-between items-center">
                        <div>
                            <p>Service</p>
                            <p>Blog</p>
                            <p>Portfolio</p>
                        </div>
                        <div>
                            <p>Tutorial</p>
                            <p>Careers</p>
                            <p>Film</p>
                        </div>
                    </div>
                </div>
                <div className="z-10">
                    <h1 className="text-2xl font-semibold tracking-wider  text-white  pt-14 pb-7">Never miss a thing.</h1>
                    <div className="flex flex-col justify-start items-start space-y-4 text-white text-xl">
                        <p>Contact Us</p>
                        <p>Facebook</p>
                        <p>FAQ</p>
                        <p>Term and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Date Deletion Protocol</p>
                    </div>
                </div>
            </div>

            <p className="text-center absolute bottom-0 left-1/3 text-white">
                {' '}
                2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED <br /> POWERED BY FLIQAINDIA PVT. LTD. <br />
                VERSION 5.1.5
            </p>

            <div className="w-32 h-32 rounded-tr-full bg-gray-400 absolute  bottom-0 left-0 " />
            <div className="w-60 h-40 rounded-bl-full bg-gray-400 absolute top-0 right-0" />
        </div>
    );
};

export default Footer;
