/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import SliderCard from './SliderCard';

const Testmonicals = () => {
    return (
        <div className="p-5 min-vh-100" style={{ backgroundColor: '#06202d' }}>
            <div className="container-xl mx-auto ">
                <h1 className="display-4 text-center pb-4 fw-bold text-white">Classes Taught by Distinguished Experts</h1>
                <div
                    className="bg-success rounded"
                    style={{
                        height: '10px',
                        maxWidth: '24rem',
                        margin: '0 auto'
                    }}
                />
                <p className="lead text-center pt-4 text-white">
                    Uplyrn lecturers have taught professionally or have been sharing online classes for years. The courses they have put together are the ones you can trust. Yep, trust us on that one.
                </p>
            </div>

            {/* <TestmonialSlider /> */}
            <div className="d-flex justify-content-between align-items-center py-4">
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
            </div>
        </div>
    );
};

export default Testmonicals;
