/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import TestmonialSlider from './TestmonialSlider';

const Testmonicals = () => {
    return (
        <div data-aos="fade-up" className="bg-[#06202D] p-20 min-h-screen">
            <div className="max-w-5xl w-full mx-auto ">
                <h1 className="text-5xl tracking-wider text-center pb-4 font-bold text-white">Classes Taught by Distinguished Experts</h1>
                <div className="h-2 max-w-2xl w-full py-1 mx-auto bg-[#93CC82] rounded-full my-4" />
                <p className="text-xl font-semibold tracking-wider text-center pb-8 text-white">
                    Uplyrn lecturers have taught professionally or have been sharing online classes for years. The courses they have put together are the ones you can trust. Yep, trust us on that one.
                </p>
            </div>
            <div className="">
                <TestmonialSlider />
            </div>
        </div>
    );
};

export default Testmonicals;
