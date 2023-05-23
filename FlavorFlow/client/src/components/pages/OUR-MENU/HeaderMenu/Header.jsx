import React from 'react';
import img from '../../../../assets/menu/banner3.jpg';

const Header = () => {
    return (
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="w-full  h-[90vh] mx-auto">
                <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-100 absolute inset-0" src={img} />
                    <div className="text-center relative z-10 w-full">
                        <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                        <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
