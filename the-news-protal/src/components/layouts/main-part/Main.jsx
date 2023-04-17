/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import React from 'react';

import EachNewsCard from './EachNewsCard';

function Main() {
    return (
        <div>
            <h3 className="text-2xl font-bold pb-4">Dragon News Home</h3>

            <EachNewsCard />
        </div>
    );
}

export default Main;
