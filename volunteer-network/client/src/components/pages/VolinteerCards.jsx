import React from 'react';
import VolunteerCard from './VolunteerCard';

const VolinteerCards = () => {
    return (
        <div>
            <div className=" mt-10 grid grid-cols-4">
                <VolunteerCard />
            </div>
            <div className="flex justify-center items-center">
                <button type="button" className="btn-own my-5">
                    hello
                </button>
            </div>
        </div>
    );
};

export default VolinteerCards;
