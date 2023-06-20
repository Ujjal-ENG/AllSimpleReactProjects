/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const Header = () => {
    return (
        <div>
            <div
                className="hero min-h-[90vh]"
                style={{
                    backgroundImage: "url('https://uplyrn.com/images/webpimg/web-banner.webp')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'center'
                }}>
                <div className="hero-overlay w-[1000px] h-[400px] bg-[#51200C] bg-opacity-60 rounded-2xl" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl  w-full grid grid-cols-1 md:grid-cols-3 ">
                        <div data-aos="fade-down" className="col-span-2 w-[500px] ">
                            <h1 className="mb-5 text-4xl font-bold text-white ">Learn and Grow – all on a single Skills Ecosystem.</h1>
                            <p className="text-xl font-semibold tracking-wider text-start text-white px-10">
                                From online courses and classes, to applying the skills you learn with mentors and coaches, the future of learning & development is Uplyrn.
                            </p>
                        </div>

                        <div data-aos="fade-up" className="col-span-1">
                            <div className="border-2" />
                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Virtual Classes</h3>
                            <div className="border-2" />

                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Mentors</h3>
                            <div className="border-2" />

                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Coaches</h3>
                            <div className="border-2" />

                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Webinars</h3>
                            <div className="border-2" />
                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Blogs</h3>
                            <div className="border-2" />
                            <h3 className="text-xl text-start text-white font-semibold my-3 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer">Teams Solutions</h3>
                            <div className="border-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
