import React from 'react';
import BannerImg from './BannerImg';
import Blogs from './Blogs';
import Discover from './Discover';
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
            <Discover />
            <Blogs />
        </div>
    );
};

export default Home;
