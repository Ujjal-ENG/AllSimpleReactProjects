/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import useMenuHooks from '../../../../hooks/useMenuHooks';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menuData] = useMenuHooks();
    const popular = menuData.filter((el) => el.category === 'popular');

    return (
        <div className="my-16">
            <SharedTitle message="Check it Out" title="FROM OUR MENU" />
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{popular && popular.map((items) => <MenuItem key={items._id} data={items} />)}</div>
            <div className="w-full flex justify-center items-center py-10">
                <button
                    type="button"
                    className="border-b-4 rounded-xl border-black px-6 py-2 text-xl font-bold duration-100 transition-all ease-out hover:border-0 active:px-4 active:py-0 active:border-2 active:border-orange-500">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};

export default Menu;
