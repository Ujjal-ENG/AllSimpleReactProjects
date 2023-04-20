/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachNewsCard from '../main-part/EachNewsCard';

function LeftNavCategoriresData() {
    const loader = useLoaderData();
    const newData = loader.data;
    return (
        <div>
            <h3 className="text-2xl font-bold pb-4">Dragon News Home</h3>
            <EachNewsCard data={newData} />
        </div>
    );
}

export default LeftNavCategoriresData;
