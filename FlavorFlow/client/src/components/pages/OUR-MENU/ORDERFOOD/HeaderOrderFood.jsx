import React from 'react';
import orderImg from '../../../../assets/shop/banner2.jpg';
import Cover from '../../../layouts/cover/Cover';

const HeaderOrderFood = () => {
    return (
        <div className="mb-10">
            <Cover title="OUR SHOP" message="WOULD YOU LIKE TO TRY A DISH?" img={orderImg} />
        </div>
    );
};

export default HeaderOrderFood;
