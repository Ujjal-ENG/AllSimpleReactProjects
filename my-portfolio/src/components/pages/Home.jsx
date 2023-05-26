/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from 'react-typed';
import img from '../../assets/my-photo.png';

const Home = () => {
    return (
        <div className="h-screen pt-20" id="home">
            <section className="pt-10 h-screen overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[1500px]">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                <div>
                                    <Typed strings={['Hey, I am Ujjal Kumar Roy']} typeSpeed={60} className="p-10" />
                                    <br />
                                    <Typed strings={['I am Software Engineer']} typeSpeed={40} backSpeed={50} attr="placeholder" loop className="m-10">
                                        <input type="text" className=" bg-white ml-3" disabled />
                                    </Typed>
                                </div>
                            </h2>

                            <Typed
                                strings={[
                                    'I am dedicated to creating a cutting-edge software solution that meet the needs of clients and users. My expertise in programming, algorithms and problem solving enables to make critical decisions that lead to successful project outcomes. I am confident in my ability into software development role.'
                                ]}
                                typeSpeed={20}
                                className="max-w-lg mt-3 text-xl tracking-wider leading-relaxed text-gray-600 md:mt-8"
                            />

                            <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidde" />
                                Ask me on
                                <a href="#https://www.linkedin.com/in/ujjal-kumar-roy/" target="_blank" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline ml-4">
                                    LinkedIn
                                </a>
                            </p>
                        </div>

                        <div data-aos="fade-left" className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img
                                className="rounded-2xl rotate-6 duration-350 transition-all ease-linear hover:rotate-0 w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src={img}
                                alt="Ujjal-Kumar-Roy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
