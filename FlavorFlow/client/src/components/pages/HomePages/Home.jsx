import React from 'react';
import Banner from './Banner';
import MessageResturant from './MessageResturant';
import OderOnlineSlider from './OderSlider/OderOnlineSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <OderOnlineSlider />
            <MessageResturant />
        </div>
    );
};

export default Home;
