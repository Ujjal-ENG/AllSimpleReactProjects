/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div
            className=" text-white py-5 px-4 position-relative"
            style={{
                borderTop: '1px solid gray',
                backgroundColor: '#06202D'
            }}>
            <div className="row container-md mx-auto">
                <div className="col-md-3">
                    <h4 className="my-3">Company</h4>
                    <p>About us</p>
                    <p>Affiliate Partners</p>
                    <p>Partnership</p>
                </div>
                <div className="col-md-3">
                    <h4 className="my-3">Community</h4>
                    <p>Terms Solutions</p>
                    <p>Refer a Friend</p>
                    <p>Blog</p>
                </div>
                <div className="col-md-3">
                    <h4 className="my-3">Lecturing</h4>
                    <p>Be a Lecturer</p>
                    <p>Lecturer Guide</p>
                    <p>Lecturer Referral</p>
                </div>
                <div className="col-md-3">
                    <h4 className="my-3">Mentoring</h4>
                    <p>Be a Mentor</p>
                </div>
            </div>
            <div className=" mx-auto mt-10 row container-md" style={{ backgroundColor: '#BD280C', height: '2px' }} />

            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex flex-column flex-sm-row justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <img src="https://uplyrn.com/images/webpimg/Uplyrn-Logo-Reverse.webp" alt="logo" className="mb-2" style={{ width: '220px' }} />
                            <p className="mb-0">Copyright © 2022 Uplyrn Pte Ltd</p>
                        </div>
                        <div className="mt-3 mt-sm-0 text-white">
                            <a href="#" className="me-3 text-decoration-none text-white">
                                Privacy
                            </a>
                            <a href="#" className="me-3  text-decoration-none text-white">
                                Terms
                            </a>
                            <a href="#" className=" text-decoration-none text-white">
                                Support
                            </a>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3 mt-sm-0">
                            <img src="https://uplyrn.com/images/webpimg/iconfb2.webp" alt="facebook" className="me-3" style={{ width: '40px' }} />
                            <img src="https://uplyrn.com/images/webpimg/instagram.webp" alt="instagram" className="me-3" style={{ width: '40px' }} />
                            <img src="https://uplyrn.com/images/webpimg/iconlinkedin.webp" alt="linkedin" className="me-3" style={{ width: '40px' }} />
                            <img src="https://uplyrn.com/images/webpimg/iconyoutube.webp" alt="youtube" className="me-3" style={{ width: '40px' }} />
                        </div>
                    </div>
                </div>
                <BsArrowUp type="button" onClick={handleTop} size={32} className="text-white cursor-pointer position-absolute end-0   me-3" />
            </div>
        </div>
    );
};

export default Footer;
