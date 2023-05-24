/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuHooks from '../../../../hooks/useMenuHooks';
import SharedCard from '../../../layouts/shared/SharedCard';

const FoodTabs = () => {
    const [menuData] = useMenuHooks();
    const drinks = menuData.filter((el) => el.category === 'drinks');
    const dessert = menuData.filter((el) => el.category === 'dessert');
    const pizza = menuData.filter((el) => el.category === 'pizza');
    const salad = menuData.filter((el) => el.category === 'salad');
    const soup = menuData.filter((el) => el.category === 'soup');
    return (
        <div className="py-4">
            <Tabs>
                <TabList className="flex max-w-5xl items-center justify-center mx-auto">
                    <Tab className="w-1/2 px-4 py-2 text-center border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">SALAd</Tab>
                    <Tab className="w-1/2 px-4 py-2 text-center border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">PIZZA</Tab>
                    <Tab className="w-1/2 px-4 py-2 text-center border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">SOUPS</Tab>
                    <Tab className="w-1/2 px-4 py-2 text-center border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">DESSERTS</Tab>
                    <Tab className="w-1/2 px-4 py-2 text-center border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                            {salad && salad.map((el) => <SharedCard key={el._id} img={el.image} price={el.price} name={el.name} recipe={el.recipe} />)}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                            {pizza && pizza.map((el) => <SharedCard key={el._id} img={el.image} price={el.price} name={el.name} recipe={el.recipe} />)}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                            {soup && soup.map((el) => <SharedCard key={el._id} img={el.image} price={el.price} name={el.name} recipe={el.recipe} />)}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                            {dessert && dessert.map((el) => <SharedCard key={el._id} img={el.image} price={el.price} name={el.name} recipe={el.recipe} />)}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                            {drinks && drinks.map((el) => <SharedCard key={el._id} img={el.image} price={el.price} name={el.name} recipe={el.recipe} />)}
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FoodTabs;
