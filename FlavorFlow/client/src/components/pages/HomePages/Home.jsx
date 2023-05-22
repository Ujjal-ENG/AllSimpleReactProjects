import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;
