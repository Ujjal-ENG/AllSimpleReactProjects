import React from 'react';

const Header = () => {
    return (
        <div className="text-center mt-12 text-black">
            <div className="w-full">
                <h1 className="mb-5 text-4xl font-bold">I grow by helping people in need.</h1>
                <div className="flex items-center justify-center">
                    <div className="relative mr-4">
                        <input type="text" placeholder="Search" className="bg-gray-100 border-2 border-gray-200 rounded-lg py-2.5 pr-8 pl-2 max-w-2xl w-96 focus:outline-none focus:bg-white" />
                        <button type="button" className="btn btn-primary absolute right-0 top-0 ">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
