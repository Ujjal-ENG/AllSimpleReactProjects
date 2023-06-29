/* eslint-disable react/jsx-indent-props */
import React from 'react';
import img1 from '../../../assets/svgfiles/Group1.png';
import img2 from '../../../assets/svgfiles/Group2.png';
import img3 from '../../../assets/svgfiles/Group3.png';
import img4 from '../../../assets/svgfiles/Group5.png';

const Header = () => {
    return (
        <div className="pt-5 pb-10">
            <h1 className="text-4xl md:text-7xl tracking-wide font-bold text-center">India’s Leading Creative Platform</h1>
            <p className="text-3xl tracking-wider py-8 text-gray-400 text-center">Experience hassle free bookings. Trusted by 2500+ Customers</p>
            <div className="join flex justify-center items-center w-full">
                <input
                    className="input rounded-t-full rounded-b-full pl-4 md:pl-48 text-md md:text-xl  border-black  max-w-5xl  w-full join-item"
                    placeholder="Search service, blog and many more..."
                />
                <button type="button" className="btn -ml-6 md:-ml-60 bg-black text-white z-10 px-4 md:px-32 rounded-full">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-20 md:gap-6 pt-20 px-20">
                <div className="flex justify-center items-center gap-4 transition-all ease-in-out duration-200 hover:scale-125">
                    <img src={img1} alt="img1" />
                    <div>
                        <h1 className="text-2xl font-bold">Verified Reviews</h1>
                        <p className="text-gray-500">For Verified Answers</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 transition-all ease-in-out duration-200 hover:scale-125">
                    <img src={img2} alt="img2" />
                    <div>
                        <h1 className="text-2xl font-bold">Top Articles</h1>
                        <p className="text-gray-500">Helps you decide</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 transition-all ease-in-out duration-200 hover:scale-125">
                    <img src={img3} alt="img3" />
                    <div>
                        <h1 className="text-2xl font-bold">Write Share Win Contest</h1>
                        <p className="text-gray-500">Earn Cash For Reviews</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 transition-all ease-in-out duration-200 hover:scale-125">
                    <img src={img4} alt="img4" />
                    <div>
                        <h1 className="text-2xl font-bold">MonthShut for Brands</h1>
                        <p className="text-gray-500">Request a Demo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
