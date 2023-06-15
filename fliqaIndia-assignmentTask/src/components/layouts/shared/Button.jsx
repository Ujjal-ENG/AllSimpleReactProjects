/* eslint-disable react/button-has-type */
import React from 'react';

const Button = ({ text }) => {
    return (
        <button type="button" className="bg-gradient-to-r from-teal-400 to-teal-900 rounded-23.5px">
            {text}
        </button>
    );
};

export default Button;
