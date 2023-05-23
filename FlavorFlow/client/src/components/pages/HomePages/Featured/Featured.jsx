/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
import React from 'react';
import img from '../../../../assets/home/featured.jpg';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const Featured = () => {
    return (
        <div className="mt-10 mb-20 ">
            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={img} alt="featured-img" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />

                <div className="absolute inset-0 block bg-black/60 md:hidden" />

                <div className="relative px-4 mx-auto w-full flex justify-center items-center flex-col">
                    <SharedTitle message="Check It Out" title="FROM OUR MENU" />

                    <div className="flex justify-center items-center gap-20">
                        <img src={img} alt="featured-img" className="max-w-3xl h-96" />
                        <div className="max-w-lg">
                            <h2 className="text-xl font-semibold leading-tight text-white py-3">October 21, 2024</h2>
                            <h2 className="text-xl font-semibold leading-tight text-white uppercase">Where can i get some?</h2>
                            <p className="mt-4 text-base text-gray-200">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem possimus voluptatem nam accusamus nulla placeat veritatis nihil repellendus sit explicabo. Rem
                                reiciendis quibusdam eum dignissimos repellat mollitia neque. Itaque doloribus quibusdam accusamus numquam debitis assumenda culpa, provident illo velit odio omnis?
                                Quod doloribus quo exercitationem eligendi distinctio expedita similique aliquid.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="border-b-4 rounded-xl border-white mt-11 px-6 py-2 text-xl font-bold duration-100 transition-all ease-out hover:border-0 active:px-4 active:py-0 active:border-2 text-white active:border-orange-500">
                        Read More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Featured;
