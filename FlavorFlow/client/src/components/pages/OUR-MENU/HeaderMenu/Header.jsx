import React from 'react';
import img from '../../../../assets/menu/banner3.jpg';
import Cover from '../../../layouts/cover/Cover';

const Header = () => {
    return (
        <div>
            <Cover img={img} title="OUR MENU" message="WOULD YOU LIKE TO TRY A DISH" />
        </div>
    );
};

export default Header;
