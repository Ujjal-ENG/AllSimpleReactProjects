import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './HeaderMenu/Header';

const OurMenus = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor|Flow-Our Menu</title>
            </Helmet>
            <Header />
        </div>
    );
};

export default OurMenus;