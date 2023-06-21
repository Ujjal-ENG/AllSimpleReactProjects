import React from 'react';
import { BsFillKeyFill, BsFillStarFill } from 'react-icons/bs';
import { MdOutlineSmartphone } from 'react-icons/md';

const InstructorIntroduction = () => {
    return (
        <div className="bg-[#E7F0F8] p-10 rounded-lg">
            <div className="border-b-2 pb-4">
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-xl font-bold text-black">Appropriate for all</h1>
                    <h1 className="text-xl font-bold text-black">4h 43m</h1>
                </div>
                <p>Level</p>
            </div>

            <div className="flex justify-center items-center gap-3 py-5 flex-col border-b-2 border-black">
                <h1 className="text-xl font-bold text-black">Lecture</h1>
                <div className="avatar">
                    <div className="w-28 rounded-full">
                        <img src="https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" />
                    </div>
                </div>
                <h1 className="text-xl font-bold text-black">Percin Imrek</h1>
                <p>TEDx Speaker</p>
                <p>International Trainer</p>
                <p>Author</p>
            </div>
            <div className="flex justify-center items-center gap-3 py-5 flex-col border-b-2 ">
                <h1 className="text-xl font-bold text-black">Subjects of Expertise</h1>
                <p>Entrepreneurship</p>
                <p>Public Speaking</p>
                <p>English Teaching</p>
                <h1 className="text-xl font-bold text-black">Students Globally:> 1,070</h1>
                <button className="btn btn-active btn-link">See Full Profile</button>
            </div>
            <div className="flex justify-start items-start gap-3 py-5 flex-col border-b-2 ">
                <h1 className="text-xl font-bold text-black">Subjects of Expertise</h1>
                <p className="inline-flex items-center gap-5">
                    <BsFillKeyFill size={32} color="gray" />
                    Full lifetime access
                </p>
                <p className="inline-flex items-center gap-5">
                    <MdOutlineSmartphone size={32} color="gray" />
                    Access on laptop, tablet and mobile devices
                </p>
                <p className="inline-flex items-center gap-5">
                    <BsFillStarFill size={32} color="gray" />
                    Certificate of completion
                </p>
            </div>
        </div>
    );
};

export default InstructorIntroduction;
