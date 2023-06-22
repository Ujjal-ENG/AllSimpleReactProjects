/* eslint-disable max-len */
import React from 'react';
import './learn.css';

const Learn = () => {
    return (
        <div className="container-md py-4">
            <div className="row">
                <div className="col d-flex flex-column align-items-start justify-content-center">
                    <h2 className="section-title1 py-2">Earn As You Learn</h2>
                    <div className="bar1" />
                    <p className="section-paragraph1 py-2">
                        Earn 25% commission when your network purchase Uplyrn courses or subscribe to our annual membership. It’s the best thing ever. Next to learning, of course.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg my-2">
                        Tell Me More
                    </button>
                </div>
                <div className="col">
                    <img src="https://uplyrn.com/images/webpimg/EarnAsYouLearn.webp" alt="avatar" className="section-image" />
                </div>
            </div>
        </div>
    );
};

export default Learn;
