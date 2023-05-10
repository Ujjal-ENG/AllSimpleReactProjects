import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Contact from './Contact';
import ServiceArea from './ServiceArea';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <ServiceArea />
            <Contact />
        </div>
    );
};

export default Home;
