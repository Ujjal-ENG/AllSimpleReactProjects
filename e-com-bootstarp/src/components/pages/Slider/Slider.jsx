/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */

import React from 'react';
import './slider1.css';

const Slider = () => {
    return (
        <div classNameName="py-5">
            <div id="carouselExampleInterval" className="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div
                        className="carousel-item active "
                        data-bs-interval="12000"
                        style={{
                            height: '500px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position: 'relative'
                        }}>
                        <img src="https://uplyrn.com/images/webpimg/Why-Virtual-Coaching.webp" className="d-block  w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block section-title">
                            <h1>Virtual Mentoring</h1>
                            <div className="bar" />
                            <p>
                                By having someone who knows more than yourself share advice, offer guidance and be a sounding board for your thoughts, you stand to benefit from experience beyond your
                                own.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="12000">
                        <img
                            src="https://uplyrn.com/images/webpimg/VirtualMentoring.webp"
                            className="d-block  w-100"
                            alt="..."
                            style={{ height: '500px', objectFit: 'cover', objectPosition: 'center' }}
                        />
                        <div className="carousel-caption d-none d-md-block section-title-coach">
                            <h1>Virtual Coaching</h1>
                            <div className="bar" />
                            <p>
                                By having someone who can help you recognize patterns in your behavior you would otherwise be unaware of, you can benefit greatly from a coach’s ability to provide
                                objective, yet highly tailored guidance and feedback.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev position-absolute start-50 " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <img src="https://uplyrn.com/images/webpimg/previous-arrow.webp" width="50" height="50" className="position-absolute bottom-0 start-30 mx-5" />
                </button>
                <button className="carousel-control-next  position-absolute  start-50 " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <img src="https://uplyrn.com/images/webpimg/next-arrow.webp" width="50" height="50" className="position-absolute bottom-0 start-50 mx-5 " />
                </button>
            </div>
        </div>
    );
};

export default Slider;
