/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Input = ({ label, id, type, value, change }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input type={type} id={id} value={value} onChange={change} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        </div>
    );
};

export default Input;
