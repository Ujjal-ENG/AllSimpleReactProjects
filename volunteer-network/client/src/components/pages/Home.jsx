import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import VolinteerCards from './VolinteerCards';

const Home = () => {
    const { results } = useLoaderData();

    return (
        <div>
            <Header />
            <VolinteerCards results={results} />
        </div>
    );
};

export default Home;
