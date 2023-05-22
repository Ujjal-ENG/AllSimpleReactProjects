import React from 'react';
import MessageResturant from './MessageResturant';
import OderOnlineSlider from './OderSlider/OderOnlineSlider';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <OderOnlineSlider />
            <MessageResturant />
        </div>
    );
};

export default Home;
