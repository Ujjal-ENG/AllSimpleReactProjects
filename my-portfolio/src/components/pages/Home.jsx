/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import Typed from 'react-typed';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import img from '../../assets/my-photo.png';

const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="h-screen pt-20" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: '#fff'
                        }
                    },
                    fpsLimit: 120,

                    particles: {
                        color: {
                            value: '#000'
                        },
                        links: {
                            color: '#000',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }}
            />
            <section className="pt-10 absolute  left-36  h-screen overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[1500px]">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
                        <motion.div
                            initial={{ y: -10000, opacity: 0, scale: 0.7 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1.8,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: 'spring',
                                    damping: 15,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                <div>
                                    <Typed strings={['Hey, I am Ujjal Kumar Roy']} typeSpeed={60} className="p-10" />
                                    <br />
                                    <Typed strings={['I am Software Engineer']} typeSpeed={40} backSpeed={50} attr="placeholder" loop className="m-10">
                                        <input type="text" className=" bg-white ml-3 " disabled />
                                    </Typed>
                                </div>
                            </h2>

                            <Typed
                                strings={[
                                    'I am dedicated to creating a cutting-edge software solution that meet the needs of clients and users. My expertise in programming, algorithms and problem solving enables to make critical decisions that lead to successful project outcomes. I am confident in my ability into software development role.'
                                ]}
                                typeSpeed={20}
                                className="max-w-lg mt-5 text-xl font-semibold tracking-wider leading-relaxed text-gray-600 md:mt-8"
                            />

                            <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidde" />
                                Ask me on
                                <a
                                    href="https://www.linkedin.com/in/ujjal-kumar-roy/"
                                    target="_blank"
                                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline ml-4"
                                    rel="noreferrer">
                                    LinkedIn
                                </a>
                            </p>
                        </motion.div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-36 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <motion.div
                                initial={{ x: -10000, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: 'spring',
                                        damping: 25,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}>
                                <img
                                    className=" rounded-2xl rotate-6 duration-350 transition-all ease-linear hover:rotate-0 w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                    src={img}
                                    alt="Ujjal-Kumar-Roy"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
