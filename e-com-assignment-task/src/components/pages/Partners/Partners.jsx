/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    return (
        <div className="bg-gray-400 py-10 mt-20">
            <h1 className="text-5xl tracking-wider text-center font-bold pb-14 text-black">We work with trusted partners to collaborate, engage and connect with you.</h1>
            <Marquee className="flex justify-between items-center">
                <div>
                    <img
                        className="object-contain w-full h-20 mx-20 transition-all duration-200 ease-in-out hover:scale-125"
                        src="https://uplyrn.com/images/webpimg/SMU-logo.webp"
                        alt="company-logo"
                    />
                </div>

                <div>
                    <img
                        className="object-contain w-full h-20 mx-20 transition-all duration-200 ease-in-out hover:scale-125"
                        src="https://uplyrn.com/images/LearnPro_ForBusiness.svg"
                        alt="company-logo"
                    />
                </div>

                <div>
                    <img className="object-contain w-full h-20 mx-20 transition-all duration-200 ease-in-out hover:scale-125" src="https://uplyrn.com/images/webpimg/atome.webp" alt="company-logo" />
                </div>

                <div>
                    <img className="object-contain w-full mx-20 transition-all duration-200 ease-in-out hover:scale-125 h-20" src="https://uplyrn.com/images/webpimg/newchip.webp" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img
                        className="object-contain w-full h-20 mx-20 transition-all duration-200 ease-in-out hover:scale-125"
                        src="https://uplyrn.com/images/webpimg/Member-AWS-EdStart-logo.webp"
                        alt="company-logo"
                    />
                </div>

                <div className="hidden md:block">
                    <img
                        className="object-contain w-full h-20 mx-20 transition-all duration-200 ease-in-out hover:scale-125"
                        src="https://uplyrn.com/images/webpimg/ergo collections2.webp"
                        alt="company-logo"
                    />
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;
