import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Contact from './Contact';
import PopularProducts from './PopularProducts';
import ServiceArea from './ServiceArea';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <ServiceArea />
            <Contact />
            <PopularProducts />
        </div>
    );
};

export default Home;
