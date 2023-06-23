import React from 'react';
import Categories from './Categories/Categories';
import Company from './Company/Company';
import Header from './Header/Header';
import Learn from './Learn/Learn';
import LearnOwn from './OwnTime/LearnOwn';
import Partners from './Partners/Partners';
import Searchbar from './SearchBar.jsx/Searchbar';
import Slider from './Slider/Slider';
import Testmonicals from './TestMonials/Testmonicals';
import Testmonials2 from './TestMonials2/Testmonials2';

const Home = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <Categories />
            <Company />
            <Testmonicals />
            <LearnOwn />
            <Learn />
            <Slider />
            <Testmonials2 />
            <Partners />
        </div>
    );
};

export default Home;
