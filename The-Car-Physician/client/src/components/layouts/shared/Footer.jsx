/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Img from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer px-36 py-10 mt-32 bg-neutral text-neutral-content">
            <div>
                <img src={Img} alt="logo" className="w-[150px] h-[50px]" />
                <p>
                    The Car Physician LTD.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why The Car Physician?</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
