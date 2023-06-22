/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Marquee from 'react-fast-marquee';

const Partners = () => {
    return (
        <div data-aos="fade-down" className="container-fluid pt-2 pb-5 mt-20" style={{ backgroundColor: '#F8F4F4' }}>
            <h1 className=" text-center p-5 ">We work with trusted partners to collaborate, engage and connect with you.</h1>
            <Marquee className="d-flex justify-content-between align-items-center gx-4">
                <div>
                    <img className="img-fluid mx-5 hovers" src="https://uplyrn.com/images/webpimg/SMU-logo.webp" alt="company-logo" style={{ width: '160px' }} />
                </div>
                <div>
                    <img className="img-fluid mx-5  hovers" src="https://uplyrn.com/images/LearnPro_ForBusiness.svg" alt="company-logo" style={{ width: '160px' }} />
                </div>
                <div>
                    <img className="img-fluid mx-5  hovers" src="https://uplyrn.com/images/webpimg/atome.webp" alt="company-logo" style={{ width: '160px' }} />
                </div>
                <div>
                    <img className="img-fluid mx-5  hovers" src="https://uplyrn.com/images/webpimg/newchip.webp" alt="company-logo" style={{ width: '160px' }} />
                </div>
                <div className="d-none d-md-block">
                    <img className="img-fluid mx-5  hovers" src="https://uplyrn.com/images/webpimg/Member-AWS-EdStart-logo.webp" alt="company-logo" style={{ width: '160px' }} />
                </div>
                <div className="d-none d-md-block">
                    <img className="img-fluid mx-5  hovers" src="https://uplyrn.com/images/webpimg/ergo collections2.webp" alt="company-logo" style={{ width: '160px' }} />
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;
