/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { BsFillCircleFill, BsFillPlayFill } from 'react-icons/bs';
import './overview.css';

const OverviewContent = () => {
    return (
        <div className="container-fluid p-5">
            <div id="overview">
                <h4>Overview</h4>
                <p>
                    <span style={{ fontWeight: 'bolder' }}>*Bonus Feature!*</span> Every student who has taken this course will be entitled to a 15 min free coaching session with the instructor Perçin
                    İmrek.
                </p>
                <p>
                    <span style={{ fontWeight: 'bolder' }}>*Another bonus feature!* </span> There are more than 10 business people from different backgrounds, professions whom I have interviewed on
                    their productivity journey at the last part of our training.
                </p>
                <p>
                    We all have 24 hours. Then what makes the difference between an extremely efficient person and a person who does not reach their full potential?
                    <br />
                    <br />
                    If you are happy being a regular Joe, fine. If not, then it is imperative that you improve yourself day by day, both personally and professionally.
                    <br />
                    <br />
                    This course aims to help you learn productivity strategies and practical methods to be more effective in your life. Both personal and professional life.
                    <br />
                    <br />
                    The instructor of this course, Perçin İmrek, is a famous international speaker, who has published 6 books so far, has given a TED talk, delivered trainings in more than 40
                    countries and visited more than 80 countries. He has his own training firm, Bosphorus Story House, and his own start-up, Natively. With all these, he still spares time for his
                    leisure activities; which are traveling, dancing, singing, and playing games.
                    <br />
                    <br />
                    In this course, Perçin comes to you with a holistic approach, with topics ranging from time management to stress management, from knowing oneself to mindfulness.
                    <br />
                    <br />
                    If you are ready to turn yourself into a more efficient person and increase the quality of your life, this course is for you!
                    <br />
                    <br />
                    Welcome to your new life :)
                </p>
            </div>

            <div id="overview" className="py-4 mt-5">
                <h3>Who this course is for</h3>
                <p>Anyone who is willing to improve themselves in their personal & professional lives.</p>
            </div>
            <div id="overview" className="py-4 mt-5">
                <h3>Requirements</h3>
                <p>Anyone who is interested in improving themselves and making a better version of themselves is welcome to this course.</p>
            </div>
            <div id="overview" className="py-4 mt-5">
                <h3>Course Content</h3>
                <p className="d-flex justify-content-start align-items-center ">
                    18 Sections <BsFillCircleFill className="me-2 ms-4" /> 101 Lectures
                    <BsFillCircleFill className="me-2 ms-4" /> 4h 43m total length
                </p>
                <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button d-flex flex-column justify-content-start align-items-start"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    style={{ fontWeight: 'bolder', fontSize: '20px' }}>
                                    About The Trainer
                                    <span className="d-flex justify-content-start align-items-center pt-3 ">
                                        7 Lectures <BsFillCircleFill className="ms-3 me-2" />
                                        28 Minutes
                                    </span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            <BsFillPlayFill size={40} color="gray" className="me-4" />A Short Intro About Me
                                        </p>
                                        <p style={{ fontSize: '24px' }}>04.34</p>
                                    </div>
                                    <div className="border my-2" />
                                    <div className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            <BsFillPlayFill size={40} color="gray" className="me-4" />A Short Intro About Project
                                        </p>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            {' '}
                                            <AiFillLock />
                                            14.34
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button d-flex flex-column justify-content-start align-items-start"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseTwo"
                                    style={{ fontWeight: 'bolder', fontSize: '20px' }}>
                                    About You
                                    <span className="d-flex justify-content-start align-items-center pt-3 ">
                                        2 Lectures <BsFillCircleFill className="ms-3 me-2" />
                                        28 Minutes
                                    </span>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            <BsFillPlayFill size={40} color="gray" className="me-4" />A Short Intro About Me
                                        </p>
                                        <p style={{ fontSize: '24px' }}>04.34</p>
                                    </div>
                                    <div className="border my-2" />
                                    <div className="d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            <BsFillPlayFill size={40} color="gray" className="me-4" />A Short Intro About Project
                                        </p>
                                        <p className="d-inline-flex align-items-center " style={{ fontSize: '24px' }}>
                                            {' '}
                                            <AiFillLock />
                                            14.34
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewContent;
