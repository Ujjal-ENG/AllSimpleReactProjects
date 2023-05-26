/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/control-has-associated-label */
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
