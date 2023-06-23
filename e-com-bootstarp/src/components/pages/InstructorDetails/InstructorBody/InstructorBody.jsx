import React from 'react';
import InstructorIntro from './InstructorIntro/InstructorIntro';
import OverviewIntro from './Overview/OverviewIntro';

const InstructorBody = () => {
    return (
        <div className="  container-fluid px-5">
            <div className="row ">
                <div className="col-8  p-5 mt-2">
                    <OverviewIntro />
                </div>
                <div className="col-4   p-5 mt-2">
                    <InstructorIntro />
                </div>
            </div>
        </div>
    );
};

export default InstructorBody;
