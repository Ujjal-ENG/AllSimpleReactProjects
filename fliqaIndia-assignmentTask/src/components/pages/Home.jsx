import React from 'react';
import BannerImg from './BannerImg';
import Bannner2 from './Bannner2';
import Blogs from './Blogs';
import Discover from './Discover';
import Featured from './Featured';
import Goup from './Goup';
import Header from './HeaderPart/Header';
import Offers from './Offers';
import OurSuccess from './OurSuccess';
import Reviews from './Reviews';
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
            <Offers />
            <Reviews />
            <Goup />
            <OurSuccess />
            <Bannner2 />
        </div>
    );
};

export default Home;
