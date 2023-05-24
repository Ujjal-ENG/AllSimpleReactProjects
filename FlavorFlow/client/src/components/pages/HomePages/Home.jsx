import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import CallUs from './CallUs';
import Reconmends from './ChefRecomends/Reconmends';
import Featured from './Featured/Featured';
import Menu from './Menu/Menu';
import MessageResturant from './MessageResturant';
import OderOnlineSlider from './OderSlider/OderOnlineSlider';
import TestMonials from './TestMonials/TestMonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor|Flow-Home</title>
            </Helmet>
            <Banner />
            <OderOnlineSlider />
            <MessageResturant />
            <Menu />
            <CallUs />
            <Reconmends />
            <Featured />
            <TestMonials />
        </div>
    );
};

export default Home;
