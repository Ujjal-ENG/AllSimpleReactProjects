import React from 'react';
import Learn from './Learn/Learn';
import LearnOwn from './OwnTime/LearnOwn';
import Partners from './Partners/Partners';
import Slider from './Slider/Slider';
import Testmonials2 from './TestMonials2/Testmonials2';

const Home = () => {
    return (
        <div>
            <LearnOwn />
            <Learn />
            <Slider />
            <Testmonials2 />
            <Partners />
        </div>
    );
};

export default Home;
