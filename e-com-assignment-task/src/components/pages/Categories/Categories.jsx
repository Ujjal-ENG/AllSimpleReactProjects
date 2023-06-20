/* eslint-disable object-curly-newline */
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CategorieItem from './CategoriesItem/CategorieItem';

const Categories = () => {
    return (
        <div className="my-20">
            <h1 className="text-5xl tracking-wider text-center pb-4 font-bold">Staying Ahead has Never been so Easy</h1>
            <p className="text-xl font-semibold tracking-wider text-center">Bite-sized content for fast learning, taught by the world’s best experts</p>
            <div>
                <Tabs>
                    <TabList className="max-w-7xl w-full mx-auto py-20 space-x-10 flex justify-center">
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">All Categories</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Personal Development</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Business</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Lifestyle</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Marketing</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Technology</Tab>
                        <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Photography & Video</Tab>
                    </TabList>

                    <TabPanel>
                        <CategorieItem />
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;
