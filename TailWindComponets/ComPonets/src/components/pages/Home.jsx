import React from 'react';
import Form from './Form/Form';
import Header1 from './Headers/Header1';
import Header3 from './Headers/Header3';
import Header4 from './Headers/Header4';
import Headers2 from './Headers/Headers2';

const Home = () => {
    return (
        <div>
            <Header1 />
            <Headers2 />
            <Header3 />
            <Header4 />
            {/* form validation part */}
            <Form />
        </div>
    );
};

export default Home;
