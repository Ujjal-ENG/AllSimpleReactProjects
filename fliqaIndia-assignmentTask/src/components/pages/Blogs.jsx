/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import goa1 from '../../assets/goa.png';
import goa2 from '../../assets/goa2.png';

const Blogs = () => {
    return (
        <>
            <div className="py-10 md:px-4 px-8 flex justify-center items-center ">
                <h1 className="text-3xl tracking-widest">
                    Popular: <span className="text-gray-500 ml-10">Website Design Logo Design Brochure Label Design</span>
                </h1>
            </div>
            <div className="border-b-2 border-black max-w-7xl mx-auto" />
            <div className="bg-gradient-to-r  from-teal-400 to-teal-100 mt-10 relative">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-5xl font-semibold tracking-wider px-10   text-teal-700 pt-10">Our Blogs</h2>
                        <p className=" pb-6 md:pb-[420px] px-10 text-xl tracking-wider text-black">Check out our Latest Blog</p>
                    </div>
                </div>
                <div className="absolute bottom-4 pl-10 md:block hidden">
                    <img src={goa1} alt="goa1" />
                </div>
                <div className="absolute bottom-4 pl-[650px]  md:block hidden">
                    <img src={goa2} alt="goa2" />
                </div>

                <div className="grid grid-cols-1 md:hidden">
                    <div className="">
                        <img src={goa1} alt="goa1" />
                    </div>
                    <div className="">
                        <img src={goa2} alt="goa2" />
                    </div>
                    <div className="px-5 pb-6">
                        <div className="flex justify-between items-center gap-36">
                            <h1 className="text-2xl font-bold">Trending Now</h1>
                            <h1 className="text-2xl font-bold">View All</h1>
                        </div>

                        <div className="py-5 border-b-2 border-black flex justify-between md:flex-row flex-col md:items-start items-center">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src={goa1} alt="goa1" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold w-64">Creative Industries are on the verge of depletion due to COVID-19</h1>
                                <p className="text-xs  w-64">In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            </div>
                        </div>
                        <div className="py-5 border-b-2 border-black flex justify-between md:flex-row flex-col md:items-start items-center">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src={goa2} alt="goa2" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold w-64">Creative Industries are on the verge of depletion due to COVID-19</h1>
                                <p className="text-xs  w-64">In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute w-8 h-8 rounded-full bg-white top-24 left-3/4" />
                <div className="absolute w-4 h-4 rounded-full bg-white top-14 left-3/4" />

                <div className="right-0 md:right-20 top-36 absolute md:block hidden">
                    <div className="flex justify-between items-center gap-36">
                        <h1 className="text-2xl font-bold">Trending Now</h1>
                        <h1 className="text-2xl font-bold">View All</h1>
                    </div>

                    <div className="py-5 border-b-2 border-black flex justify-between">
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <img src={goa1} alt="goa1" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold w-64">Creative Industries are on the verge of depletion due to COVID-19</h1>
                            <p className="text-xs  w-64">In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                    <div className="py-5 border-b-2 border-black flex justify-between">
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <img src={goa2} alt="goa2" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold w-64">Creative Industries are on the verge of depletion due to COVID-19</h1>
                            <p className="text-xs  w-64">In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
