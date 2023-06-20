import React from 'react';
import Categories from './Categories/Categories';
import Company from './Company/Company';
import Discover from './Discover/Discover';
import Header from './Header/Header';
import Searchbar from './SearchBar.jsx/Searchbar';
import Testmonicals from './TestMonials/Testmonicals';

const Home = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <Categories />
            <Discover />
            <Company />
            <Testmonicals />
        </div>
    );
};

export default Home;
