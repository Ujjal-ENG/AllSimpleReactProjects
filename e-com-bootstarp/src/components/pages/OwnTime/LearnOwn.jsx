/* eslint-disable max-len */
import React from 'react';
import './learnown.css';

const LearnOwn = () => {
    return (
        <div>
            <div className="container-md py-5">
                <div className="row">
                    <div className="col d-flex flex-column align-items-start justify-content-center">
                        <h2 className="section-title1 py-2">Learn At Your Own Time</h2>
                        <div className="bar1" />
                        <p className="section-paragraph1 py-2">
                            Everyone has their personal sweet spot when it comes to learning. With Uplyrn, you can choose to learn at any time, anywhere. But maybe not on a first date!
                        </p>
                    </div>
                    <div className="col img">
                        <img src="https://uplyrn.com/images/webpimg/LearnAtYourOwnTime.webp" alt="avatar" className="section-image1 mx-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnOwn;
