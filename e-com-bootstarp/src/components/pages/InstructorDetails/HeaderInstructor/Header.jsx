/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { IoMdPlanet } from 'react-icons/io';
import './header.css';

const Header = () => {
    return (
        <div id="header" className=" px-4 container-fluid px-5">
            <div className="row pt-5">
                <div className="col-7 text-white  p-5 mt-5">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{ fontSize: '20px', color: '#93CC69' }}>
                            <li className="breadcrumb-item">Personal Productivity &gt;</li>
                            <li className="breadcrumb-item " aria-current="page">
                                Time Management &gt;
                            </li>
                            <li className="breadcrumb-item " aria-current="page">
                                Stress Management
                            </li>
                        </ol>
                    </nav>
                    <video id="video" controls>
                        <source src="https://player.vimeo.com/external/451108090.sd.mp4?s=be43f670061443ffa8c6d96bcfe5f885b989a2e8&profile_id=164&oauth2_token_id=57447761" />
                    </video>
                    <h3 className="text-white py-3">Being a Productivity Guru: Efficiency Tips & Tricks</h3>
                    <p>Learn productivity strategies and practical methods to be more effective personally and professionally.</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-gray d-flex justify-content-between align-items-center">
                            <BsFillStarFill size={32} color="gray" className="ms-4" />
                            <BsFillStarFill size={32} color="gray" className="ms-4" />
                            <BsFillStarFill size={32} color="gray" className="ms-4" />
                            <BsFillStarFill size={32} color="gray" className="ms-4" />
                            <BsFillStarFill size={32} color="gray" className="ms-4" />
                        </div>
                        <h3 style={{ color: '#FFE400', fontWeight: 'bolder' }}>321 Views</h3>
                    </div>
                    <h5 className="py-4 d-inline-flex">
                        Last Updated 6/2023 <IoMdPlanet size={24} className="ms-5" />
                        English{' '}
                    </h5>
                </div>

                <div className="col-5  mt-5 p-5">
                    <div className=" mt-5 border border-success rounded p-4 px-5 d-flex justify-content-center flex-column ">
                        <button type="button" className="btn btn-primary btn-lg">
                            Buy Only this video course for <span className="text-decoration-line-through">$71.85</span>
                            <span className="text-decoration-underline">$17.85</span>
                        </button>
                        <div className="divider-container text-white py-2">
                            <div className="divider-line" />
                            <div className="divider-text">OR</div>
                            <div className="divider-line" />
                        </div>
                        <div className=" text-white bg-success rounded align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="d-flex justify-content-center py-2 rounded">
                                <div className="toast-body d-flex text-dark justify-content-center flex-column align-items-center">
                                    <h5>
                                        <span className="text-decoration-line-through">$71.85 </span>
                                        <span className="text-decoration-underline"> $17.85 </span>
                                    </h5>
                                    <h4>Annual Subscription</h4>
                                    <p>Enjoy full access to all available video content</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-white leader pt-4">* Please use the WELCOME-20 Discount Code to enjoy 20% Off</p>
                    </div>
                    <div id="btn">
                        <button
                            type="button"
                            className="btn btn-link"
                            style={{
                                fontSize: '25px',
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                            Add to Cart
                        </button>
                    </div>

                    <div className=" mt-5 border border-success rounded p-4 px-5 d-flex justify-content-center flex-column ">
                        <p className="text-white  pt-4 text-center" style={{ fontSize: '20px' }}>
                            Get your team access to top Uplyrn courses anytime, anywhere.
                        </p>
                        <button className="btn btn-success btn-lg text-dark" style={{ fontWeight: 'bolder', fontSize: '24px' }}>
                            Try Uplyrn Teams
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
