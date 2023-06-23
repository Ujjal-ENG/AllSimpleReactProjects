import React from 'react';
import Company from '../Company/Company';
import Header from './HeaderInstructor/Header';
import InstructorBody from './InstructorBody/InstructorBody';

const InstrcutorDetails = () => {
    return (
        <div>
            <Header />
            <InstructorBody />
            <Company />
        </div>
    );
};

export default InstrcutorDetails;
