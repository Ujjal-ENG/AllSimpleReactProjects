/* eslint-disable react/jsx-indent */
import React from 'react';
import LeftNav from '../layouts/leftsite/LeftNav';
import Main from '../layouts/main-part/Main';
import RightNav from '../layouts/rightsite/RightNav';

function Container() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
            <div className="col-span-3  p-4">
                <LeftNav />
            </div>
            <div className="col-span-6  p-4 ">
                <Main />
            </div>
            <div className="col-span-3  p-4">
                <RightNav />
            </div>
        </div>
    );
}

export default Container;
