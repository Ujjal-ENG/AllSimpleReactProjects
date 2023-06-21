/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import CourseContent from './LeftSite/CourseContent';
import Overview from './LeftSite/Overview';
import InstructorIntroduction from './RightSite/InstructorIntroduction';

const CourseOverview = () => {
    return (
        <div className="md:px-20 p-0 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-2 w-full">
                    <Overview />
                    <CourseContent />
                </div>
                <div className="col-span-1 w-full">
                    <InstructorIntroduction />
                </div>
            </div>
        </div>
    );
};

export default CourseOverview;
