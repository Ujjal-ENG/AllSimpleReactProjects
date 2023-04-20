/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { BsArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

function Slider() {
    const data = [
        'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4049876/pexels-photo-4049876.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4245923/pexels-photo-4245923.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ];
    const [index, setIndex] = useState(0);
    const decreaseIndex = () => {
        if (index === 0) setIndex(3);
        setIndex((ps) => ps - 1);
    };
    const increaseIndex = () => {
        if (index === data.length - 1) setIndex(-1);
        setIndex((ps) => ps + 1);
    };
    console.log(index);
    return (
        <div className="relative">
            <div className="container w-full ">
                <img src={data[index]} alt="img1" className="h-[864px] w-full" />
                {/* <img src={data[1]} alt="img2" />
                <img src={data[2]} alt="img3" />
                <img src={data[3]} alt="img4" />
                <img src={data[4]} alt="img5" /> */}
            </div>
            <div className="">
                <BsFillArrowLeftCircleFill className="text-3xl absolute top-1/2 cursor-pointer" onClick={decreaseIndex} />
                <BsArrowRightCircleFill className="text-3xl absolute right-0 top-1/2 cursor-pointer" onClick={increaseIndex} />
            </div>
        </div>
    );
}

export default Slider;
