/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const AdminGreet = () => {
    const { userInfo } = useAuth();
    return (
        <div className="max-w-5xl -ml-36">
            <section className="py-10 bg-white ">
                <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-center md:space-x-14 order-2">
                        <div className="relative flex-shrink-0 w-48 h-48">
                            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1" />
                            <img className="relative object-cover w-48 h-48 rounded-full" src={userInfo?.photoURL} alt="" />
                        </div>

                        <div className="mt-10 md:mt-0">
                            <p className="text-6xl font-bold text-black mt-7">
                                Welcome
                                <br />
                                {userInfo?.displayName}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminGreet;
