/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const HomepageCard = () => {
    return (
        <div data-aos="fade-down">
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-10 gap-5">
                    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div className="absolute inset-0 ">
                            <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 className="text-4xl font-bold text-white">
                                    Kuakata
                                    <br className="hidden xl:block" />
                                    Called is Sunsine
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div className="absolute inset-0 ">
                            <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/981091/pexels-photo-981091.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 className="text-4xl font-bold text-white">
                                    Sylhet
                                    <br className="hidden xl:block" />
                                    The tea garden where you fill fresh
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div className="absolute inset-0 ">
                            <img
                                className="object-cover w-full h-full"
                                src="https://media.istockphoto.com/id/1045841548/photo/tiger-drinking-water-from-river.jpg?b=1&s=612x612&w=0&k=20&c=soTEmk135nwrjApcMr2lDujyS-gB8YWYQR_FpA81-C0="
                                alt="image"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 className="text-4xl font-bold text-white">
                                    Sundarbans
                                    <br className="hidden xl:block" />
                                    The Mangrove Forest and Royal Bengal Tiger
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomepageCard;
