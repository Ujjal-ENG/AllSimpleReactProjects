import React from 'react';
import BannerImg from './BannerImg';
import Blogs from './Blogs';
import Discover from './Discover';
import Featured from './Featured';
import Header from './HeaderPart/Header';
import OurSuccess from './OurSuccess';
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
            <OurSuccess />
        </div>
    );
};

export default Home;
