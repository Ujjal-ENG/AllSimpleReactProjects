import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './HeaderMenu/Header';
import Menu from './SharedMenu/Menu';

const OurMenus = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor|Flow-Our Menu</title>
            </Helmet>
            <Header />
            <Menu />
        </div>
    );
};

export default OurMenus;
