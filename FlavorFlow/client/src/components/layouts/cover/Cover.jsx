import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, message }) => {
    return (
        <Parallax blur={{ min: -10, max: 15 }} bgImage={img} bgImageAlt="the dog" strength={-200}>
            <div className="hero h-[700px]">
                <div className="hero max-w-md  mx-auto text-center text-neutral-content">
                    <div className="hero-overlay bg-opacity-50" />
                    <div className="max-w-md py-10 ">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{message}</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '10px' }} />
        </Parallax>
    );
};

export default Cover;
