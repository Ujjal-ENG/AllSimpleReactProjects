/* eslint-disable react/button-has-type */
import React from 'react';

const Button = ({ children }) => {
    return (
        <button type="button" className="btn text-white bg-gradient-to-r from-teal-400 to-teal-900 rounded-[24px] text-xl px-8">
            {children}
        </button>
    );
};

export default Button;
