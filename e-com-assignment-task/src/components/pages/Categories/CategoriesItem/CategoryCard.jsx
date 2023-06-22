/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    return (
        <div>
            <section className="pb-20 rounded-2xl cursor-grab">
                <div className="grid max-w-xl grid-cols-1 mx-5 shadow-2xl rounded-2xl ">
                    <div className="overflow-hidden bg-white  shadow-2xl py-4 rounded-2xl">
                        <div className="">
                            <div className="relative">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full rounded-2xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                                </a>

                                <div className="absolute top-4 left-4">
                                    <h1 className="px-4 py-2 text-xl font-semibold tracking-widest text-red-400 uppercase bg-white rounded-full">
                                        $20.85 <del className="text-gray-500">$29.56</del>{' '}
                                    </h1>
                                </div>
                            </div>
                            <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase px-4"> Random Name </span>
                            <p className="mt-5 text-xl font-semibold line-clamp-2 px-2 pb-4">
                                <a href="#" title="" className="text-black">
                                    Being a Productivity Guru: Efficiency Tips & Tricks
                                </a>
                            </p>

                            <div className="flex justify-between items-center px-2 pb-6">
                                <p>Appropriate for all</p>
                                <p>59m</p>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <Link to="/instructor-details" type="button" className="btn btn-success">
                                    Add to Cart?
                                </Link>
                                <div className="tooltip" data-tip="hello">
                                    <button type="button">
                                        <AiOutlineHeart size={32} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CategoryCard;
