import React from 'react';
import Company from './CourseOverview/Company/Company';
import CourseOverview from './CourseOverview/CourseOverview';
import Header from './Header/Header';

const InstructorDetails = () => {
    return (
        <div>
            <Header />
            <CourseOverview />
            <Company />
        </div>
    );
};

export default InstructorDetails;
