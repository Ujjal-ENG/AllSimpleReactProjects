/* eslint-disable max-len */
import React from 'react';
import Img from '../../assets/Rectangle 2.png';

const Header = () => {
    return (
        <div>
            <div className="hero">
                <img src={Img} alt="" className="w-full object-cover  h-[90vh]" />
                <div className="hero-overlay bg-opacity-30" />
                <div className="flex justify-center items-center text-white">
                    <div className="max-w-lg mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-lg md:text-xl mb-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button type="button" className="btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
