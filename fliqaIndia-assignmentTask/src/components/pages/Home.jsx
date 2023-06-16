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
            <div data-aos="zoom-in-up">
                <Header />
            </div>
            <div data-aos="zoom-in-up">
                <TrustedAssociate />
            </div>
            <div data-aos="fade-up">
                <Featured />
            </div>
            <div data-aos="fade-up">
                <Discover />
            </div>
            <div data-aos="zoom-in-up">
                <Blogs />
            </div>
            <div data-aos="fade-up">
                <Offers />
            </div>
            <div data-aos="fade-down">
                <Reviews />
            </div>
            <div data-aos="zoom-in-up">
                <Goup />
            </div>
            <div data-aos="fade-up">
                <OurSuccess />
            </div>
            <div data-aos="fade-down">
                <Bannner2 />
            </div>
        </div>
    );
};

export default Home;
