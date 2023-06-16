import React from 'react';
import group2 from '../../assets/Group2.png';
import group1 from '../../assets/group1.png';

const Goup = () => {
    return (
        <div className="bg-gradient-to-r  from-teal-400 to-teal-100 mt-10 flex md:flex-row flex-col gap-8 md:gap-0 px-10 md:px-0 justify-evenly items-center py-10">
            <img src={group1} alt="group1" />
            <img src={group2} alt="group2" />
        </div>
    );
};

export default Goup;
