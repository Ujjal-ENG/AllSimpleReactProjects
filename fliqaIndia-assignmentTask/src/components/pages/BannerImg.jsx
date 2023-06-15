import React from 'react';
import banner from '../../assets/bannerImg.png';

const BannerImg = () => {
    return (
        <div className="w-full">
            <img src={banner} alt="banner-img" className="object-contain w-full" />
        </div>
    );
};

export default BannerImg;
