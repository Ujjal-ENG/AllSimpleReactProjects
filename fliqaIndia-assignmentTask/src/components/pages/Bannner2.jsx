/* eslint-disable max-len */
import React from 'react';
import bannerimg from '../../assets/banner3.png';
import bannersmall from '../../assets/bannersmall.png';

const Bannner2 = () => {
    return (
        <div>
            <section className="relative py-10 my-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={bannerimg} alt="bannerimg" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />

                <div className="absolute inset-0 block bg-black/30 md:hidden" />

                <div className="relative flex  justify-evenly px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center space-y-2 md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                        <p className="mt-4 text-6xl tracking-wider text-gray-200 uppercase">Ultimate Course In</p>
                        <h2 className="text-3xl font-bold leading-tight text-white lg:text-6xl uppercase">Photography</h2>
                    </div>
                    <img src={bannersmall} alt="bannersmall" />
                </div>
            </section>
        </div>
    );
};

export default Bannner2;
