/* eslint-disable react/jsx-indent */
import React from 'react';
import LeftNavCard from './LeftNavCard';
import LeftNavCategories from './LeftNavCategories';

function LeftNav() {
    return (
        <div>
            <h3 className="text-2xl font-bold pb-4">All Caterogy</h3>
            <LeftNavCategories />
            <LeftNavCard />
        </div>
    );
}

export default LeftNav;
