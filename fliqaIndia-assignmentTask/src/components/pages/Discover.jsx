import React from 'react';
import bannerImg from '../../assets/banner2.png';
import img1 from '../../assets/discover1.png';
import img2 from '../../assets/discover2.png';
import img3 from '../../assets/discover3.png';
import img4 from '../../assets/discover4.png';

const Discover = () => {
    return (
        <div className="py-10">
            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-fill w-full h-full" src={bannerImg} alt="bannner" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent" />

                <div className="absolute inset-0 block bg-black/60 md:hidden" />

                <div className="relative px-8  max-w-7xl">
                    <div className="text-center lg:w-2/3 xl:w-1/3 md:text-left pb-32">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl uppercase">Discover</h2>
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl uppercase">Graphic Design Ideas</h2>
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl uppercase">and Services</h2>
                        <p className="mt-4 uppercase tracking-wider text-xl text-gray-200">From Branding to Marketing</p>
                    </div>
                    <div className="join flex justify-start mt-auto w-full">
                        <input className="input rounded-t-full rounded-b-full pl-12 text-xl  border-black  max-w-xl  w-full join-item" placeholder="Search service" />
                        <button type="button" className="btn -ml-14 bg-black text-white z-10 px-24 rounded-full">
                            Search
                        </button>
                    </div>

                    <div className="absolute top-0 left-2/3">
                        <img src={img1} alt="img1" className="border-8 border-black" />
                    </div>
                    <div className="absolute -top-20 -right-10">
                        <img src={img2} alt="img2" className="border-8 border-black" />
                    </div>
                    <div className="absolute top-40 -right-72">
                        <img src={img3} alt="img3" className="border-8 border-black" />
                    </div>
                    <div className="absolute -top-24 -right-1/3">
                        <img src={img4} alt="img4" className="border-8 border-black" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Discover;
