import React from 'react';
import CategorieItem from '../Categories/CategoriesItem/CategorieItem';

const Discover = () => {
    return (
        <div>
            <h1 className="text-5xl tracking-wider text-center pb-4 font-bold">What Will You Discover?</h1>
            <p className="text-xl font-semibold tracking-wider text-center">Students are viewing. What you find just might interest and inspire you. Tremendously.</p>
            <div>
                <CategorieItem />
            </div>
        </div>
    );
};

export default Discover;
