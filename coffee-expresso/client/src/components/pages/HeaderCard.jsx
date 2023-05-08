import React from 'react';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';
import { SiBuymeacoffee } from 'react-icons/si';
import { SlBadge } from 'react-icons/sl';

const HeaderCard = () => {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="my-container grid grid-cols-1 md:grid-cols-4 justify-items-center gap-7">
                <div className="flex justify-start items-start flex-col max-w-xs space-y-4">
                    <GiCoffeeCup className="text-5xl" />
                    <h3 className="text-2xl font-semibold tracking-wide">Awesome Aroma</h3>
                    <p className="text-gray-600 tracking-wider">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="flex justify-start items-start flex-col max-w-xs space-y-4">
                    <SlBadge className="text-5xl" />
                    <h3 className="text-2xl font-semibold tracking-wide">High Quality</h3>
                    <p className="text-gray-600 tracking-wider">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="flex justify-start items-start flex-col max-w-xs space-y-4">
                    <GiCoffeeBeans className="text-5xl" />
                    <h3 className="text-2xl font-semibold tracking-wide">Pure Grades</h3>
                    <p className="text-gray-600 tracking-wider">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="flex justify-start items-start flex-col max-w-xs space-y-4">
                    <SiBuymeacoffee className="text-5xl" />
                    <h3 className="text-2xl font-semibold tracking-wide">Proper Roasting</h3>
                    <p className="text-gray-600 tracking-wider">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;
