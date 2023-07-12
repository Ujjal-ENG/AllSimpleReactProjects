/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

const Example = () => {
    const [increment5, setIncrement5] = useState(5);

    const increment = () => {
        console.log('Called');
        setIncrement5((ps) => ps + 5);
    };

    useEffect(() => {
        const stopIn = setInterval(increment, 1000);
        return () => {
            clearInterval(stopIn);
        };
    }, []);

    return <div>Example Count: {increment5}</div>;
};

export default Example;
