import React from 'react';

const Cover = ({ img, title, message }) => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero max-w-md  mx-auto text-center text-neutral-content">
                <div className="hero-overlay bg-opacity-50" />
                <div className="max-w-md py-10 ">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
