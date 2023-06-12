/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import { motion } from 'framer-motion';
import React from 'react';
import img from '../../../../assets/foodieadventurer.png';

const FoodieAdventurer = () => {
    return (
        <div>
            <section className="md:ml-20 ml-0 mt-10 md:mt-0  2xl:py-24 ">
                <div className="px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
                    <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                            <motion.div
                                initial={{ x: 100, opacity: 0, scale: 0.7 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 1.8,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: 'spring',
                                        damping: 15,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                                className="lg:order-2 2xl:-mr-24">
                                <img className="w-full shadow-xl rounded-xl" src={img} alt="foodie|adventurer" />
                            </motion.div>

                            <motion.div
                                initial={{ x: 100, opacity: 0, scale: 0.7 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 1.8,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: 'spring',
                                        damping: 15,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                                className="lg:order-1">
                                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
                                    Foodie | <br className="hidden xl:block" />
                                    Adventurer
                                </h2>

                                <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Surf Indian Cuisine Food </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Different Types of Recipe </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Indian top Rated Chefs </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Fully Responsive </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Edit & Customize Easily </span>
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Made with MERN stack </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Firebase for Login Functionality </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 font-medium text-white"> Made with TailwindCSS with DaisyUI framework for design</span>
                                    </li>
                                </ul>

                                <div className="flex  items-center md:items-start justify-center md:justify-start gap-6 md:gap-0 mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                                    <a
                                        href="https://foodie-adventurer.web.app/"
                                        title="foodie|adventurer"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                                        role="button"
                                        rel="noreferrer">
                                        Visit the Site
                                    </a>

                                    <a
                                        href="https://github.com/Ujjal-ENG"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black"
                                        role="button"
                                        rel="noreferrer">
                                        Explore the Code
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodieAdventurer;
