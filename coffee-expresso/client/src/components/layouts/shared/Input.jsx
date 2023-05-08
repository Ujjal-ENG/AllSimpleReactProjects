/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Input = ({ label, id, type, value, change, placeholder }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text font-bold text-xl">{label}</span>
            </label>
            <input type={type} id={id} value={value} onChange={change} placeholder={placeholder} className="input input-bordered input-primary w-full  max-w-4x" />
        </div>
    );
};

export default Input;
