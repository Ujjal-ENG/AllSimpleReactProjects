/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { IoMdPlanet } from 'react-icons/io';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

const Header = () => {
    return (
        <div className="bg-[#06202D] py-24 mb-32 text-white">
            <div className="md:max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="text-sm breadcrumbs ">
                        <ul className="text-[#93CC7A] text-lg">
                            <li>Personal Productivity</li>
                            <li>Time Management</li>
                            <li> Stress Management</li>
                        </ul>
                    </div>

                    <Player>
                        <source src="https://player.vimeo.com/external/451108090.sd.mp4?s=be43f670061443ffa8c6d96bcfe5f885b989a2e8&profile_id=164&oauth2_token_id=57447761" />
                    </Player>

                    <h1 className="text-2xl font-bold text-white tracking-wider py-4">Being a Productivity Guru: Efficiency Tips & Tricks</h1>
                    <p className="text-lg font-semibold">Learn productivity strategies and practical methods to be more effective personally and professionally.</p>
                    <div className="flex md:flex-row flex-col justify-between items-center py-4">
                        <div className="rating rating-lg">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 " />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                        </div>
                        <h1 className="text-2xl  font-bold text-[#FFE417] tracking-wider py-4">245 views</h1>
                    </div>
                    <h1 className="text-md  inline-flex md:px-0 px-4  font-bold text-white tracking-wider py-4">
                        Last Updated 6/2023
                        <IoMdPlanet size={24} className="ml-5" />
                        English
                    </h1>
                </div>

                <div className="py-10 mx-10">
                    <div className="border-2 border-[#93CC7A] rounded-xl p-10">
                        <button
                            type="button"
                            className="btn bg-[#3D96F7]  md:pb-0 pb-20 px-0 w-full md:px-4 text-base md:text-xl font-normal md:font-semibold tracking-tighter md:tracking-wider hover:bg-black text-white border-none">
                            Buy only this course for <del>$71.85</del> <u>$19.45*</u>
                        </button>
                        <div className="divider md:py-0 py-8">OR</div>
                        <div className="bg-[#93CC7A] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#497a34] rounded-2xl px-4 py-2">
                            <p className="text-center text-black text-xl">
                                <del>$71.85</del> <u>$19.45*</u>
                            </p>
                            <h1 className="text-xl md:text-2xl text-center font-bold text-black tracking-wider py-4">Annual Subscription</h1>
                            <p className="text-center tracking-wider text-xl text-black">Enjoy full access to all available video content</p>
                        </div>
                        <p className="pt-4">* Please use the WELCOME-20 Discount Code to enjoy 20% Off</p>
                    </div>
                    <button className="btn pt-10 pb-4 btn-active btn-link w-full mx-auto text-2xl font-bold text-white">Add to Cart</button>
                    <div className="border-2 border-[#93CC7A] rounded-xl p-10 mt-10">
                        <h1 className="text-xl text-center font-bold text-white tracking-wider py-4">Get your team access to top Uplyrn courses anytime, anywhere.</h1>
                        <div className="flex justify-center items-center">
                            <button className="bg-[#93CC7A] btn text-xl font-bold text-black border-none transition-all duration-200  ease-in-out cursor-pointer hover:bg-[#497a34] rounded-2xl  mt-6">
                                Try Uplyrn Teams
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
