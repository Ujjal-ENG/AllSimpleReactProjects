/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => {
                const popurlarItem = data.filter((el) => el.category === 'popular');
                return setMenuData(popurlarItem);
            });
    }, []);
    console.log(menuData);
    return (
        <div className="my-16">
            <SharedTitle message="Check it Out" title="FROM OUR MENU" />
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{menuData && menuData.map((items) => <MenuItem key={items._id} data={items} />)}</div>
        </div>
    );
};

export default Menu;
