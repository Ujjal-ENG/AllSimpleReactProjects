import React from 'react';

const Header = () => {
    return (
        <div className="pt-5 pb-10">
            <h1 className="text-7xl tracking-wide font-bold text-center">India’s Leading Creative Platform</h1>
            <p className="text-3xl tracking-wider py-8 text-gray-400 text-center">Experience hassle free bookings. Trusted by 2500+ Customers</p>
            <div className="join flex justify-center items-center w-full">
                <input className="input rounded-t-full rounded-b-full pl-48 text-xl  border-black  max-w-5xl  w-full join-item" placeholder="Search service, blog and many more..." />
                <button type="button" className="btn -ml-60 bg-black text-white z-10 px-32 rounded-full">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
