import React from 'react';
import CategorieItem from '../Categories/CategoriesItem/CategorieItem';

const Discover = () => {
    return (
        <div className="container-xl mx-auto ">
            <h1 className="display-6 text-center pb-2 pt-4 fw-bold text-bg">What Will You Discover?</h1>

            <p className="lead text-center text-bg">Students are viewing. What you find just might interest and inspire you. Tremendously.</p>
            <div>
                <CategorieItem />
            </div>
        </div>
    );
};

export default Discover;
