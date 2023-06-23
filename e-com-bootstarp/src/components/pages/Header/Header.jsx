/* eslint-disable max-len */
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="inner-content">
                <div className="inner-content2">
                    <div className="d-flex justify-content-between align-items-center  text-white">
                        <div data-aos="fade-down" style={{ width: '500px', padding: '0px 10px' }}>
                            <h1 className="mb-3  text-white" style={{ fontWeight: 'bold' }}>
                                Learn and Grow – all on a single Skills Ecosystem.
                            </h1>
                            <p style={{ fontSize: '20px' }}>
                                From online courses and classes, to applying the skills you learn with mentors and coaches, the future of learning & development is Uplyrn.
                            </p>
                        </div>

                        <div className="col-span-1">
                            <div className="border" />
                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Virtual Classes
                            </h3>
                            <div className="border" />

                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Mentors
                            </h3>
                            <div className="border" />

                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Coaches
                            </h3>
                            <div className="border" />

                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Webinars
                            </h3>
                            <div className="border" />

                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Blogs
                            </h3>
                            <div className="border" />

                            <h3 className="my-3 my-class" data-aos="fade-up">
                                Teams Solutions
                            </h3>
                            <div className="border" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
