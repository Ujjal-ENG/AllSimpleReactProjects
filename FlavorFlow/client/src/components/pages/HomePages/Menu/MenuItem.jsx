/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const MenuItem = ({ data }) => {
    return (
        <section className="py-10 bg-white sm:py-16 ">
            <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="md:flex md:items-start md:justify-center md:space-x-14">
                    <div className="relative flex-shrink-0 w-48 h-48">
                        <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1" />
                        <img className="relative object-cover w-48 h-48 rounded-full" src={data.image} alt={data.name} />
                    </div>

                    <div className="mt-10 md:mt-0">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-black mt-7">
                                {data.name}
                                ---------------
                            </p>
                            <h4 className="text-yellow-400 font-bold text-xl mt-10">${data.price}</h4>
                        </div>
                        <p className="mt-1 text-base text-gray-600 w-3/4">{data.recipe}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuItem;
