import React from 'react';
import Header from './Header';
import HomepageCard from './HomepageCard';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Header />
            <Search />
            <HomepageCard />
        </div>
    );
};

export default Home;
