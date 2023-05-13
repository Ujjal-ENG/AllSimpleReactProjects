import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Contact from './Contact';
import Features from './Features';
import PopularProducts from './PopularProducts';
import ServiceArea from './ServiceArea';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner />
            <AboutUs />
            <ServiceArea />
            <Contact />
            <PopularProducts />
            <Features />
        </div>
    );
};

export default Home;
