/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './categories.css';

const Categories = () => {
    return (
        <div>
            <div className="container-xl mx-auto ">
                <h1 className="display-6 text-center pb-2 pt-4 fw-bold text-bg">Staying Ahead has Never been so Easy</h1>

                <p className="lead text-center text-bg">Bite-sized content for fast learning, taught by the world’s best experts.</p>

                <div>
                    <Tabs>
                        <TabList id="tabs" className="py-5 gy-5 d-flex justify-content-between text-decoration-none">
                            <Tab id="tab">All Categories</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Personal Development</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Business</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Lifestyle</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Marketing</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Technology</Tab>
                            <Tab className="text-xl font-bold text-black cursor-pointer focus:text-blue-600 focus:border-b-4 focus:border-b-blue-600 pb-3">Photography & Video</Tab>
                        </TabList>

                        <TabPanel>{/* <CategorieItem /> */}</TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Categories;
