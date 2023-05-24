/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import dessretImg from '../../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../../assets/menu/soup-bg.jpg';
import useMenuHooks from '../../../../hooks/useMenuHooks';
import Cover from '../../../layouts/cover/Cover';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menuData] = useMenuHooks();
    const offered = menuData.filter((el) => el.category === 'offered');
    const dessert = menuData.filter((el) => el.category === 'dessert');
    const pizza = menuData.filter((el) => el.category === 'pizza');
    const salad = menuData.filter((el) => el.category === 'salad');
    const soup = menuData.filter((el) => el.category === 'soup');

    return (
        <div className="my-16">
            {offered && (
                <>
                    <SharedTitle message="Don't Miss" title="TODAY'S OFFER" />
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{offered && offered.map((items) => <MenuItem key={items._id} data={items} />)}</div>
                </>
            )}

            {dessert && (
                <>
                    <Cover
                        img={dessretImg}
                        message="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero saepe amet deserunt, excepturi harum magni recusandae delectus asperiores veritatis. Ipsum, id suscipit. Similique quam exercitationem laudantium error fugit corporis!"
                        title="DESSERTS"
                    />
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{dessert && dessert.map((items) => <MenuItem key={items._id} data={items} />)}</div>
                </>
            )}
            {pizza && (
                <>
                    <Cover
                        img={pizzaImg}
                        message="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero saepe amet deserunt, excepturi harum magni recusandae delectus asperiores veritatis. Ipsum, id suscipit. Similique quam exercitationem laudantium error fugit corporis!"
                        title="PIZZA"
                    />
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{pizza && pizza.map((items) => <MenuItem key={items._id} data={items} />)}</div>
                </>
            )}
            {salad && (
                <>
                    <Cover
                        img={saladImg}
                        message="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero saepe amet deserunt, excepturi harum magni recusandae delectus asperiores veritatis. Ipsum, id suscipit. Similique quam exercitationem laudantium error fugit corporis!"
                        title="SALAD"
                    />
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{salad && salad.map((items) => <MenuItem key={items._id} data={items} />)}</div>
                </>
            )}
            {soup && (
                <>
                    <Cover
                        img={soupImg}
                        message="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero saepe amet deserunt, excepturi harum magni recusandae delectus asperiores veritatis. Ipsum, id suscipit. Similique quam exercitationem laudantium error fugit corporis!"
                        title="SOUP"
                    />
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">{soup && soup.map((items) => <MenuItem key={items._id} data={items} />)}</div>
                </>
            )}
            <div className="w-full flex justify-center items-center py-10">
                <button type="button" className="border-b-4 border-0 btn-outline btn">
                    Order Your Favorite Food
                </button>
            </div>
        </div>
    );
};

export default Menu;
