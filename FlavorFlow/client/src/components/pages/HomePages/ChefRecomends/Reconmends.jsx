import React from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import ChefSlider from './ChefSlider';

const Reconmends = () => {
    return (
        <div>
            <SharedTitle message="Should Try" title="CHEF RECOMMENDS" />
            <div className="py-14">
                <ChefSlider />
            </div>
        </div>
    );
};

export default Reconmends;
