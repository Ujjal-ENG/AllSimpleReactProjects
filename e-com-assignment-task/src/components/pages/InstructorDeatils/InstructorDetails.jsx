import React from 'react';
import Company from './CourseOverview/Company/Company';
import CourseOverview from './CourseOverview/CourseOverview';
import Header from './Header/Header';

const InstructorDetails = () => {
    return (
        <div>
            <div data-aos="fade-up">
                <Header />
            </div>
            <div className="fade-up">
                <CourseOverview />
            </div>
            <div data-aos="fade-down">
                <Company />
            </div>
        </div>
    );
};

export default InstructorDetails;
