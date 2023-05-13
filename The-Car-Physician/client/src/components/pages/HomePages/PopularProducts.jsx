/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Product1 from '../../../assets/images/products/1.png';
import Product2 from '../../../assets/images/products/2.png';
import Product3 from '../../../assets/images/products/3.png';
import Product4 from '../../../assets/images/products/4.png';
import Product5 from '../../../assets/images/products/5.png';
import Product6 from '../../../assets/images/products/6.png';

const PopularProducts = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="30"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            {' '}
            <h3 className="text-orange-600 text-xl font-bold text-center">Popular Products</h3>
            <h1 className="text-5xl font-bold tracking-wider text-center py-5">Browse Our Products</h1>
            <p className="text-gray-500 tracking-widest text-center mx-auto max-w-3xl">
                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            {/* services card */}
            <div className="grid grid-cols-3 justify-items-center gap-6 py-14">
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product1} alt="product" className="rounded-xl h-68 object-cover" />
                    </figure>
                    <div className="card-body items-start text-center space-y-5">
                        <h2 className="card-title text-2xl">Car Engine Plug</h2>

                        <div className=" flex justify-between items-center w-full mt-auto">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product2} alt="product" className="rounded-xl h-68 object-cover " />
                    </figure>
                    <div className="card-body items-start text-center space-y-5">
                        <h2 className="card-title text-2xl">Car Air Filter</h2>

                        <div className=" flex justify-between items-center w-full mt-auto">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product3} alt="product" className="rounded-xl h-72 object-cover" />
                    </figure>
                    <div className="card-body items-start text-center space-y-5 mt-auto">
                        <h2 className="card-title text-2xl">Car Led Light</h2>

                        <div className=" flex justify-between items-center w-full ">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product4} alt="product" className="rounded-xl h-68 object-cover" />
                    </figure>
                    <div className="card-body items-start text-center space-y-5">
                        <h2 className="card-title text-2xl">Car Air Socket</h2>

                        <div className=" flex justify-between items-center w-full mt-auto">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product5} alt="product" className="rounded-xl h-68 object-cover" />
                    </figure>
                    <div className="card-body items-start text-center space-y-5">
                        <h2 className="card-title text-2xl">Car Tier</h2>

                        <div className=" flex justify-between items-center w-full mt-auto">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border-2">
                    <figure className="px-10 pt-10">
                        <img src={Product6} alt="product" className="rounded-xl h-68 object-cover" />
                    </figure>
                    <div className="card-body items-start text-center space-y-5">
                        <h2 className="card-title text-2xl">Car Battery</h2>

                        <div className=" flex justify-between items-center w-full mt-auto">
                            <h2 className="card-title text-orange-600">Price: $20.00</h2>
                            <button type="button" className="btn btn-circle border-none btn-outline">
                                <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <button type="button" className="btn btn-outline text-xl btn-wide font-bold text-orange-500 border-orange-600">
                    More Products
                </button>
            </div>
        </div>
    );
};

export default PopularProducts;
