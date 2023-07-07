import React from 'react';
import Header from './Header';
import HomepageCard from './HomepageCard';
import ImageZoom from './ImageZoomEffect/ImageZoom';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Header />
            <Search />
            <HomepageCard />
            <ImageZoom />
        </div>
    );
};

export default Home;
