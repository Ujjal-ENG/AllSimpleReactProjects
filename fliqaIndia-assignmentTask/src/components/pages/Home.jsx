import React from 'react';
import BannerImg from './BannerImg';
import Featured from './Featured';
import Header from './HeaderPart/Header';
import TrustedAssociate from './TrustedAssociate';

const Home = () => {
    return (
        <div>
            <BannerImg />
            <Header />
            <TrustedAssociate />
            <Featured />
        </div>
    );
};

export default Home;
