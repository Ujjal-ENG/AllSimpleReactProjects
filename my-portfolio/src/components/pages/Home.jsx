/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-multi-spaces */
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
        <div className="h-screen pt-20 relative" id="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                // options={{
                //     background: {
                //         color: {
                //             value: '#fff'
                //         }
                //     },
                //     fpsLimit: 120,

                //     particles: {
                //         color: {
                //             value: '#000'
                //         },
                //         links: {
                //             color: '#000',
                //             distance: 150,
                //             enable: true,
                //             opacity: 0.5,
                //             width: 1
                //         },
                //         collisions: {
                //             enable: true
                //         },
                //         move: {
                //             direction: 'none',
                //             enable: true,
                //             outModes: {
                //                 default: 'bounce'
                //             },
                //             random: false,
                //             speed: 2,
                //             straight: false
                //         },
                //         number: {
                //             density: {
                //                 enable: true,
                //                 area: 800
                //             },
                //             value: 80
                //         },
                //         opacity: {
                //             value: 0.5
                //         },
                //         shape: {
                //             type: 'circle'
                //         },
                //         size: {
                //             value: { min: 1, max: 5 }
                //         }
                //     },
                //     detectRetina: true
                // }}
                options={{
                    name: 'Images',
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'bubble'
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        move: {
                            enable: true,
                            speed: 2
                        },
                        number: {
                            density: {
                                enable: true
                            },
                            limit: 0,
                            value: 80
                        },
                        opacity: {
                            value: 1
                        },
                        rotate: {
                            animation: {
                                enable: true,
                                speed: 5,
                                sync: false
                            },
                            direction: 'random',
                            value: {
                                min: 0,
                                max: 360
                            }
                        },
                        shape: {
                            options: {
                                image: [
                                    {
                                        src: 'https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://w7.pngwing.com/pngs/106/519/png-transparent-tailwind-css-hd-logo.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://swiperjs.com/images/share-banner-3.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://testrigor.com/wp-content/uploads/2023/01/express-logo.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
                                        width: 32,
                                        height: 32
                                    },
                                    {
                                        src: 'https://raw.githubusercontent.com/keon/algorithms/master/docs/source/_static/logo/logotype1blue.png',
                                        width: 44,
                                        height: 44
                                    },
                                    {
                                        src: 'https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-data-structure.png',
                                        width: 44,
                                        height: 44
                                    },
                                    {
                                        src: 'https://media.istockphoto.com/id/1334768175/vector/oop-object-oriented-programming-acronym.jpg?s=170667a&w=0&k=20&c=fHqp8voqHF0yIU7fcrWAvXERC9AHmiiJXjzy4y8kTB4=',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/OOP.svg/1280px-OOP.svg.png',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://e7.pngegg.com/pngimages/1018/16/png-clipart-mysql-workbench-database-mysql-cluster-others-text-logo.png',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://t4.ftcdn.net/jpg/04/96/33/33/360_F_496333368_onvz9v1ufijVhR6RPLIzOQtOweFCovRV.jpg',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://logowik.com/content/uploads/images/vercel1868.jpg',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://img.freepik.com/free-icon/snakes_318-368381.jpg',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/visual-studio-code-logo.png',
                                        width: 70,
                                        height: 70
                                    },
                                    {
                                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.png',
                                        width: 70,
                                        height: 70
                                    }
                                ]
                            },
                            type: 'image'
                        },
                        size: {
                            value: 30
                        }
                    },
                    background: {
                        color: '#fff'
                    }
                }}
            />
            <div className="hidden md:block top-1/2 fixed transform -translate-y-1/2">
                <div className="flex flex-col gap-5 ml-5">
                    <a href="https://www.facebook.com/ujjal.roy.7862" target="_blank" className="btn btn-square btn-outline border-4 border-orange-500" rel="noreferrer">
                        <i className="fa-brands fa-facebook fa-spin fa-2xl text-[#1f66e0]" />
                    </a>
                    <a href="https://github.com/Ujjal-ENG" target="_blank" className="btn btn-square btn-outline border-4 border-orange-500" rel="noreferrer">
                        <i className="fa-brands fa-github fa-spin fa-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ujjal-kumar-roy/" target="_blank" className="btn btn-square btn-outline border-4 border-orange-500" rel="noreferrer">
                        <i className="fa-brands fa-linkedin fa-2xl fa-spin text-[#144eb3]" />
                    </a>
                </div>
            </div>
            <section className="pt-10 absolute left-0 md:left-36  h-screen overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
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
                                    <Typed strings={['I am Software Engineer']} typeSpeed={40} backSpeed={50} attr="placeholder" loop className="m-10 text-3xl mt-50">
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
                            <motion.div
                                initial={{ x: 20000, opacity: 0, scale: 0.2 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: 'spring',
                                        damping: 25,
                                        stiffness: 200,
                                        restDelta: 0.001
                                    }
                                }}>
                                <img
                                    className="absolute inset-x-0 bottom-0 -mb-36 md:-translate-x-1/2 md:left-1/2"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                                    alt=""
                                />
                            </motion.div>

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
