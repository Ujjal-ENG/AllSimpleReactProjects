import React from 'react';
import Overview from './LeftSite/Overview';
import InstructorIntroduction from './RightSite/InstructorIntroduction';

const CourseOverview = () => {
    return (
        <div className="px-20 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-2">
                    <Overview />
                </div>
                <div className="col-span-1">
                    <InstructorIntroduction />
                </div>
            </div>
        </div>
    );
};

export default CourseOverview;
