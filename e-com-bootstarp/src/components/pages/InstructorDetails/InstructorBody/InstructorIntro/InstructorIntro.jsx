/* eslint-disable react/button-has-type */
import React from 'react';
import { BsFillKeyFill, BsFillStarFill } from 'react-icons/bs';
import { MdOutlineSmartphone } from 'react-icons/md';
import './instructorintro.css';

const InstructorIntro = () => {
    return (
        <div id="instructor">
            <div className="d-flex justify-content-between align-items-center">
                <h5>Appropriate for all</h5>
                <h5>4h 43m</h5>
            </div>
            <p>Level</p>
            <div className="border" />
            <div className="d-flex justify-content-center flex-column align-items-center py-4">
                <h4>Lecturer</h4>
                <img src="https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F50%2F2022%2F10%2F12%2Fpercin-imrek.webp" alt="avatar" style={{ borderRadius: '50%' }} />
                <h4 style={{ fontWeight: 'bolder' }} className="py-2">
                    Percin Imrek
                </h4>
                <p>TEDx Speaker</p>
                <p>International Trainer</p>
                <p>Author</p>
                <div className="border" style={{ color: 'black' }} />
                <h4 className="text-xl font-bold text-black">Subjects of Expertise</h4>
                <p>Entrepreneurship</p>
                <p>Public Speaking</p>
                <p>English Teaching</p>
                <h4 className="text-xl font-bold text-black">Students Globally:&gt; 1,070</h4>
                <button className="btn btn-active btn-link">See Full Profile</button>
                <div className="border-top d-flex justify-content-start align-items-start flex-column gx-3 py-5 flex-col border-b-2 ">
                    <p className="d-inline-flex justify-content-center align-items-center gap-3">
                        <BsFillKeyFill size={32} color="gray" />
                        Full lifetime access
                    </p>
                    <p className="d-inline-flex justify-content-center align-items-center gap-3">
                        <MdOutlineSmartphone size={32} color="gray" />
                        Access on laptop, tablet and mobile devices
                    </p>
                    <p className="d-inline-flex justify-content-center align-items-center gap-3">
                        <BsFillStarFill size={32} color="gray" />
                        Certificate of completion
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructorIntro;
