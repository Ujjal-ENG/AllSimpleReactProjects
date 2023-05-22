import React from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import Slider from './Slider';

const OderOnlineSlider = () => {
    return (
        <div>
            <SharedTitle message="From 11:00am to 10:00pm" title="Order Online" />

            <div className=" py-14">
                <Slider />
            </div>
        </div>
    );
};

export default OderOnlineSlider;
