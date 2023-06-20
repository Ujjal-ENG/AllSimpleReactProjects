import React from 'react';
import Categories from './Categories/Categories';
import Discover from './Discover/Discover';
import Header from './Header/Header';
import Searchbar from './SearchBar.jsx/Searchbar';

const Home = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <Categories />
            <Discover />
        </div>
    );
};

export default Home;
