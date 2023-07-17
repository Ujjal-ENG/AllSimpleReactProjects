/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Example from './Example';

const App = () => {
    const [count, setCount] = useState(0);
    const [clicked, setIsClicked] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => console.log(data));
        document.title = 'Count button CLick';
    }, [count]);
    useEffect(() => {
        document.title = 'Clicked button CLick';
    }, [clicked]);
    return (
        <div>
            Count is: {count}
            <br />
            <button onClick={() => setCount((ps) => ps + 1)} type="button" className="btn border-2 p-2 border-black rounded-md m-2">
                Increment Me
            </button>
            <button onClick={() => setIsClicked((ps) => !ps)} type="button" className="btn border-2 p-2 border-black rounded-md m-2">
                {clicked ? 'Clicked' : 'Click Me'}
            </button>
            {clicked && <Example />}
        </div>
    );
};

export default App;
