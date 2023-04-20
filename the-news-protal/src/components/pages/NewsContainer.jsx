/* eslint-disable react/jsx-indent */
import React from 'react';
import LeftNavCategoriresData from '../layouts/leftsite/LeftNavCategoriresData';
import RightNav from '../layouts/rightsite/RightNav';
import Footer from '../layouts/shared/Footer';
import Navbar from '../layouts/shared/Navbar';

function NewsContainer() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
                <div className="col-span-9  p-4 ">
                    <LeftNavCategoriresData />
                </div>
                <div className="col-span-3  p-4">
                    <RightNav />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsContainer;
