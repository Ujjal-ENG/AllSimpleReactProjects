import React from 'react';
import Banner from './Banner';
import CallUs from './CallUs';
import Featured from './Featured/Featured';
import Menu from './Menu/Menu';
import MessageResturant from './MessageResturant';
import OderOnlineSlider from './OderSlider/OderOnlineSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <OderOnlineSlider />
            <MessageResturant />
            <Menu />
            <CallUs />
            <Featured />
        </div>
    );
};

export default Home;
