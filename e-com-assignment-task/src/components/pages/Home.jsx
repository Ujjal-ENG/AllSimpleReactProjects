import React from 'react';
import Categories from './Categories/Categories';
import Company from './Company/Company';
import Discover from './Discover/Discover';
import EarnLearn from './EarnLearn/EarnLearn';
import Header from './Header/Header';
import OwnTime from './OwnTime/OwnTime';
import Partners from './Partners/Partners';
import Searchbar from './SearchBar.jsx/Searchbar';
import Testmonicals from './TestMonials/Testmonicals';
import Testmonials2 from './TestMonials2/Testmonials2';

const Home = () => {
    return (
        <div>
            <Header />

            <Searchbar />

            <Categories />
            <Discover />
            <Company />
            <Testmonicals />
            <OwnTime />
            <EarnLearn />
            <Testmonials2 />
            <Partners />
        </div>
    );
};

export default Home;
