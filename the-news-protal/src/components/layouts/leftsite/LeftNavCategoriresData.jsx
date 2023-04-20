/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams } from 'react-router-dom';

function LeftNavCategoriresData() {
    const { id } = useParams();
    console.log(id);
    return <div>LeftNavCategoriresDataL and the id is: {id}</div>;
}

export default LeftNavCategoriresData;
