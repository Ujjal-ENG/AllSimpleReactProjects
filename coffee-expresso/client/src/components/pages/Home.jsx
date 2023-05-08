import React from 'react';
import FollowInstragram from './FollowInstragram';
import Header from './Header';
import HeaderCard from './HeaderCard';
import OurPopularProducts from './OurPopularProducts';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderCard />
            <div className="py-4" />
            <OurPopularProducts />
            <FollowInstragram />
        </div>
    );
};

export default Home;
