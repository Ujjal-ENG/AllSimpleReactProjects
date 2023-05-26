/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="h-screen flex justify-center items-start  pt-20" id="about">
            <div className="absolute space-y-6">
                <h1 className="text-4xl font-bold text-center py-4 ">About Me</h1>
                <div className="max-w-[70px] p-1 bg-violet-600 w-full mx-auto" />
                <Tabs>
                    <TabList className="flex gap-2">
                        <Tab className={`tabs-button ${activeTabIndex === 0 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(0)}>
                            About Me
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 1 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(1)}>
                            Education
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 2 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(2)}>
                            Achievement
                        </Tab>
                        <Tab className={`tabs-button ${activeTabIndex === 3 ? 'active' : 'disabled'}`} onClick={() => setActiveTabIndex(3)}>
                            Skills
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default About;
