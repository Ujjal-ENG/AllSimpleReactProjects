/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Typed from 'react-typed';

const About = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="h-screen flex justify-center items-start  pt-20" id="about">
            <div className="absolute space-y-6">
                <h1 className="text-4xl font-bold text-center py-4 ">About Me</h1>
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
                        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-6xl">
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
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default About;
