import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';
import Barchat from '../../../layouts/shared/Barchat';
import PieCharts from '../../../layouts/shared/PieChart';

const DashboardHome = () => {
    const { userInfo } = useAuth();
    return (
        <div className="max-w-5xl -ml-36">
            <Helmet>
                <title>AssignmentTask - User Dashboard</title>
            </Helmet>
            <section data-aos="fade-up" className="py-10 bg-white ">
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

            <div data-aos="fade-down" className="flex justify-between items-center">
                <PieCharts />
                <Barchat />
            </div>
        </div>
    );
};

export default DashboardHome;
