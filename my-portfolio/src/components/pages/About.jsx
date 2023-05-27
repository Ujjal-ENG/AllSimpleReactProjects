/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Particles from 'react-tsparticles';
import Typed from 'react-typed';
import { loadFull } from 'tsparticles';

const About = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
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
        <div className="h-screen flex justify-center items-start  pt-20" id="about">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                // options={{
                //     name: 'Fireworks',
                //     fullScreen: {
                //         enable: true
                //     },
                //     background: {
                //         color: '#000'
                //     },
                //     emitters: {
                //         direction: 'top',
                //         life: {
                //             count: 0,
                //             duration: 0.1,
                //             delay: 0.1
                //         },
                //         rate: {
                //             delay: 0.15,
                //             quantity: 1
                //         },
                //         size: {
                //             width: 100,
                //             height: 0
                //         },
                //         position: {
                //             y: 100,
                //             x: 50
                //         }
                //     },
                //     particles: {
                //         number: {
                //             value: 0
                //         },
                //         destroy: {
                //             bounds: {
                //                 top: 30
                //             },
                //             mode: 'split',
                //             split: {
                //                 count: 1,
                //                 factor: {
                //                     value: 0.333333
                //                 },
                //                 rate: {
                //                     value: 100
                //                 },
                //                 particles: {
                //                     stroke: {
                //                         width: 0
                //                     },
                //                     color: {
                //                         value: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93']
                //                     },
                //                     number: {
                //                         value: 0
                //                     },
                //                     collisions: {
                //                         enable: false
                //                     },
                //                     destroy: {
                //                         bounds: {
                //                             top: 0
                //                         }
                //                     },
                //                     opacity: {
                //                         value: {
                //                             min: 0.1,
                //                             max: 1
                //                         },
                //                         animation: {
                //                             enable: true,
                //                             speed: 0.7,
                //                             sync: false,
                //                             startValue: 'max',
                //                             destroy: 'min'
                //                         }
                //                     },
                //                     shape: {
                //                         type: 'circle'
                //                     },
                //                     size: {
                //                         value: 2,
                //                         animation: {
                //                             enable: false
                //                         }
                //                     },
                //                     life: {
                //                         count: 1,
                //                         duration: {
                //                             value: {
                //                                 min: 1,
                //                                 max: 2
                //                             }
                //                         }
                //                     },
                //                     move: {
                //                         enable: true,
                //                         gravity: {
                //                             enable: true,
                //                             acceleration: 9.81,
                //                             inverse: false
                //                         },
                //                         decay: 0.1,
                //                         speed: {
                //                             min: 10,
                //                             max: 25
                //                         },
                //                         direction: 'outside',
                //                         random: true,
                //                         straight: false,
                //                         outModes: 'destroy'
                //                     }
                //                 }
                //             }
                //         },
                //         life: {
                //             count: 1
                //         },
                //         shape: {
                //             type: 'line'
                //         },
                //         size: {
                //             value: {
                //                 min: 0.1,
                //                 max: 50
                //             },
                //             animation: {
                //                 enable: true,
                //                 sync: true,
                //                 speed: 90,
                //                 startValue: 'max',
                //                 destroy: 'min'
                //             }
                //         },
                //         stroke: {
                //             color: {
                //                 value: '#ffffff'
                //             },
                //             width: 1
                //         },
                //         rotate: {
                //             path: true
                //         },
                //         move: {
                //             enable: true,
                //             gravity: {
                //                 acceleration: 15,
                //                 enable: true,
                //                 inverse: true,
                //                 maxSpeed: 100
                //             },
                //             speed: {
                //                 min: 10,
                //                 max: 20
                //             },
                //             outModes: {
                //                 default: 'destroy',
                //                 top: 'none'
                //             },
                //             trail: {
                //                 fillColor: '#000',
                //                 enable: true,
                //                 length: 10
                //             }
                //         }
                //     }
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
            <div className="absolute space-y-6">
                <h1 className="text-4xl font-bold text-center py-4 text-black">About Me</h1>
                <div className="max-w-[70px] p-1 bg-violet-600 w-full mx-auto" />
                <Tabs>
                    <TabList className="flex gap-2">
                        <Tab className={`tabs-button ${activeTabIndex === 0 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(0)}>
                            About Me
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 1 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(1)}>
                            Education
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 2 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(2)}>
                            Achievement
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 3 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(3)}>
                            Skills
                        </Tab>
                    </TabList>

                    <TabPanel className="mt-4">
                        <div className="bg-white p-6 rounded-md shadow-lg max-w-6xl">
                            <h2 className="text-2xl font-bold mb-4">About Me</h2>
                            <Typed
                                strings={[
                                    'My name is Ujjal Kumar Roy, and I am a recent graduate of the Green University of Bangladesh, holding a degree in Computer Science and Engineering. With a strong background in web development, I have expertise in HTML, CSS, JavaScript, React, and backend technologies such as MongoDB, Node.js, and the Express.js framework. Throughout my academic journey, I have worked on several web-based projects, which have honed my skills in creating visually appealing and user-friendly websites.'
                                ]}
                                typeSpeed={20}
                                className="text-lg text-gray-800"
                            />

                            <br />

                            <br />
                            <Typed
                                strings={[
                                    'In addition to my academic accomplishments, I am proud to mention that I was awarded the first runner-up position in the inter programming contest at our university. This experience has not only sharpened my problem-solving abilities but has also taught me the importance of teamwork and efficient coding practices. I am also proud to have received the VC (Vice Chancellor) award five times and the Dean award four times for outstanding semester results. These recognitions highlight my consistent dedication to academic excellence and my commitment to achieving high standards in my studies.'
                                ]}
                                typeSpeed={20}
                                className="text-lg text-gray-800"
                            />
                            <br />
                            <br />
                            <Typed
                                strings={[
                                    'I am impressed by X Company innovative approach to software development and its commitment to delivering high-quality solutions. The company focus on teamwork and fostering a collaborative environment aligns well with my own values. I am excited about the opportunity to contribute to X Company success as a Full Stack Developer, leveraging my skills and passion for creating exceptional web applications.'
                                ]}
                                typeSpeed={20}
                                className="text-lg text-gray-800"
                            />
                            <br />
                            <br />
                            <Typed
                                strings={[
                                    'Thank you for considering my application. I would appreciate the opportunity to discuss my qualifications further and demonstrate how I can contribute to the growth and success of X Company. Please find my attached resume for additional details on my experience and skills.'
                                ]}
                                typeSpeed={20}
                                className="text-lg text-gray-800"
                            />
                            <br />
                            <br />
                            <Typed
                                strings={['I look forward to the possibility of discussing how my qualifications align with your organization needs. Thank you for your time and consideration.']}
                                typeSpeed={20}
                                className="text-lg text-gray-800"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel className="mt-4">
                        <div className="bg-white p-6 rounded-md shadow-lg max-w-6xl">
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Degree/Grade</th>
                                            <th>Institution</th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr className="active">
                                            <th>1</th>
                                            <td>B.Sc. in CSE </td>
                                            <td>Green University of Bangladesh</td>
                                            <td>3.85/4.00 </td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>2</th>
                                            <td>Higher Secondary School certificate</td>
                                            <td>Bauphal Govt College, Bauphal</td>
                                            <td>4.17/5.00</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>3</th>
                                            <td>Secondary School Certificate</td>
                                            <td>A.R.S. High School, Bauphal</td>
                                            <td>4.61/5.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl">
                            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                            <ul className="list-disc pl-6">
                                <li className="text-lg text-gray-800 mb-2">
                                    Interactivity with JavaScript -
                                    <a
                                        href="
                                        https://www.coursera.org/account/accomplishments/certificate/QN4LSPGZTBWS"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Certificate Here!!
                                    </a>
                                </li>
                                <li className="text-lg text-gray-800 mb-2">
                                    Master Git and Github - Beginner to Expert -
                                    <a
                                        href="https://www.udemy.com/certificate/UC-2d6f3b9c-3102-47d8-8e94-dd106a5cca74/"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Certificate Here!!
                                    </a>
                                </li>
                                <li className="text-lg text-gray-800 mb-2">
                                    Master HTML and CSS by Building Real World Projects -
                                    <a
                                        href="https://udemy-certificate.s3.amazonaws.com/image/UC-4e1b30c7-39d5-47c5-9922-0abbcffb6367.jpg"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Certificate Here!!
                                    </a>
                                </li>

                                <li className="text-lg text-gray-800 mb-2">
                                    JavaScript,Bootstrarp and PHP -
                                    <a
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.udemy.com/certificate/UC-d6b84478-d939-4a23-a914-e80719ecadd7/">
                                        Certificate Here!!
                                    </a>
                                </li>
                                <li className="text-lg text-gray-800 mb-2">
                                    Python Programming -
                                    <a
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.coursera.org/account/accomplishments/certificate/HDNW8GVUQSLT">
                                        Certificate Here!!
                                    </a>
                                </li>
                                <li className="text-lg text-gray-800 mb-2">
                                    Introduction to HTML5 -
                                    <a
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="
https://www.coursera.org/account/accomplishments/certificate/NMNUN957MGWF">
                                        Certificate Here!!
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel className="mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl">
                            <h2 className="text-3xl font-bold mb-4">Technical Skills and Expertise Area</h2>

                            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="border border-gray-300 rounded p-4">
                                    <h3 className="text-2xl font-semibold mb-2">Front-end Development</h3>
                                    <ul className="list-disc pl-6">
                                        <li className="text-gray-800 mb-1">HTML5 (Proficient)</li>
                                        <li className="text-gray-800 mb-1">CSS3 (Proficient)</li>
                                        <li className="text-gray-800 mb-1">Tailwind CSS (Proficient)</li>
                                        <li className="text-gray-800 mb-1">Bootstrap CSS (Proficient)</li>
                                        <li className="text-gray-800 mb-1">JavaScript (Proficient)</li>
                                        <li className="text-gray-800 mb-1">React JS (Proficient)</li>
                                    </ul>
                                </div>

                                <div className="border border-gray-300 rounded p-4">
                                    <h3 className="text-2xl font-semibold mb-2">Back-end Development</h3>
                                    <ul className="list-disc pl-6">
                                        <li className="text-gray-800 mb-1">Express JS (Intermediate)</li>
                                        <li className="text-gray-800 mb-1">Node JS (Primary)</li>
                                        <li className="text-gray-800 mb-1">MySQL (Intermediate)</li>
                                        <li className="text-gray-800 mb-1">MongoDB (Proficient)</li>
                                    </ul>
                                </div>

                                <div className="border border-gray-300 rounded p-4">
                                    <h3 className="text-2xl font-semibold mb-2">Other Skills</h3>
                                    <ul className="list-disc pl-6">
                                        <li className="text-gray-800 mb-1">Algorithm (Primary)</li>
                                        <li className="text-gray-800 mb-1">Data Structure (Proficient)</li>
                                        <li className="text-gray-800 mb-1">Java (OOP) (Intermediate)</li>
                                        <li className="text-gray-800 mb-1">Python (Intermediate)</li>
                                    </ul>
                                </div>

                                <div className="border border-gray-300 rounded p-4">
                                    <h3 className="text-2xl font-semibold mb-2">Tools and Languages</h3>
                                    <ul className="list-disc pl-6">
                                        <li className="text-gray-800 mb-1">Git (Comfortable)</li>
                                        <li className="text-gray-800 mb-1">Postman (Comfortable)</li>
                                        <li className="text-gray-800 mb-1">GitHub (Comfortable)</li>
                                        <li className="text-gray-800 mb-1">Netlify (Comfortable)</li>
                                        <li className="text-gray-800 mb-1">Vercel (Comfortable)</li>
                                        <li className="text-gray-800 mb-1">Figma (Familiar)</li>
                                        <li className="text-gray-800 mb-1">AutoCAD (Familiar)</li>
                                        <li className="text-gray-800 mb-1">Microsoft Office (Proficient)</li>
                                        <li className="text-gray-800 mb-1">Firebase (Intermediate)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10">
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-4">Interpersonal Skills</h2>
                                <ul className="list-disc pl-6">
                                    <li className="text-gray-800 mb-1">Self-Learner</li>
                                    <li className="text-gray-800 mb-1">Teamwork</li>
                                    <li className="text-gray-800 mb-1">Team Leader</li>
                                    <li className="text-gray-800 mb-1">Time Management</li>
                                    <li className="text-gray-800 mb-1">Detail Oriented</li>
                                    <li className="text-gray-800 mb-1">Hardworking</li>
                                    <li className="text-gray-800 mb-1">Problem Solver</li>
                                </ul>
                            </div>

                            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-4">Languages</h2>
                                <ul className="list-disc pl-6">
                                    <li className="text-gray-800 mb-1">Bangla (Native)</li>
                                    <li className="text-gray-800 mb-1">English (Fluent)</li>
                                    <li className="text-gray-800 mb-1">Hindi (Just know but don’t speak)</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default About;
