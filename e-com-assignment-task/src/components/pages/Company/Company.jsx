import React from 'react';
import Marquee from 'react-fast-marquee';

const Company = () => {
    return (
        <div className="bg-gray-400 py-10 my-20">
            <h1 className="text-5xl tracking-wider text-center font-bold pb-10 text-black">As Seen On</h1>
            <Marquee className="flex justify-between items-center">
                <div>
                    <img className="object-contain w-full h-6 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="company-logo" />
                </div>

                <div>
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="company-logo" />
                </div>

                <div>
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="company-logo" />
                </div>

                <div>
                    <img className="object-contain w-full mx-20 h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full mx-20 h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="company-logo" />
                </div>

                <div className="hidden md:block">
                    <img className="object-contain w-full h-8 mx-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="company-logo" />
                </div>
            </Marquee>
        </div>
    );
};

export default Company;
