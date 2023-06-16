/* eslint-disable import/no-unresolved */
import React from 'react';
import img from '../../assets/group3.png';
import Button from '../layouts/shared/Button';

const Reviews = () => {
    return (
        <div className="border-b-2 border-black pb-8">
            <h1 className="text-[#4C696D] text-4xl font-bold text-center pt-5 pb-2">Testimonials</h1>
            <h1 className="text-[#4C696D] text-xl font-semibold text-center  pb-2">Words from our Clients</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                <div className="col-span-1">
                    <img src={img} alt="group" className="md:pl-20 pl-0" />
                </div>
                <div className="col-span-2 w-full pt-10 md:pt-0">
                    <div className="flex justify-center md:flex-row flex-col md:justify-end gap-10 md:gap-2 px-10 md:px-0">
                        <Button>Google</Button>
                        <button type="button" className="btn border-2 text-black bg-white border-black  rounded-[24px] text-xl px-8">
                            Facebook
                        </button>
                        <button type="button" className="btn border-2 text-black bg-white border-black  rounded-[24px] text-xl px-8">
                            Weddingwire
                        </button>
                        <button type="button" className="btn border-2 text-black bg-white border-black  rounded-[24px] text-xl px-8">
                            WedmeGood
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center pt-10 bg-gradient-to-t from-transparent via-[#BADCDC] to-transparent">
                        <div className="w-[220px] h-[300px] relative">
                            <div className="w-[198px] h-[275px] bg-[#416F75] text-white pt-20 px-3 rounded-md">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis distinctio,</p>
                                <h1 className="text-xl font-bold text-center py-3">~Random name</h1>
                            </div>
                            <div className="avatar absolute -top-5 -right-1">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.pexels.com/photos/3546719/pexels-photo-3546719.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] h-[300px] relative">
                            <div className="w-[198px] h-[275px] bg-[#416F75] text-white pt-20 px-3 rounded-md">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis distinctio,</p>
                                <h1 className="text-xl font-bold text-center py-3">~Random name</h1>
                            </div>
                            <div className="avatar absolute -top-5 -right-1">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.pexels.com/photos/3546719/pexels-photo-3546719.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] h-[300px] relative">
                            <div className="w-[198px] h-[275px] bg-[#416F75] text-white pt-20 px-3 rounded-md">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis distinctio,</p>
                                <h1 className="text-xl font-bold text-center py-3">~Random name</h1>
                            </div>
                            <div className="avatar absolute -top-5 -right-1">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.pexels.com/photos/3546719/pexels-photo-3546719.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] h-[300px] relative">
                            <div className="w-[198px] h-[275px] bg-[#416F75] text-white pt-20 px-3 rounded-md">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis distinctio,</p>
                                <h1 className="text-xl font-bold text-center py-3">~Random name</h1>
                            </div>
                            <div className="avatar absolute -top-5 -right-1">
                                <div className="w-24 rounded-full">
                                    <img src="https://images.pexels.com/photos/3546719/pexels-photo-3546719.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
