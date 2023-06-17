/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Helmet } from 'react-helmet-async';
import Barchat from '../../../layouts/shared/Barchat';
import PieCharts from '../../../layouts/shared/PieChart';
import AdminGreet from './AdminGreet';

const AdminHome = () => {
    return (
        <div>
            <Helmet>
                <title>AssignmentTask - Admin Home</title>
            </Helmet>
            <div data-aos="fade-up">
                <AdminGreet />
            </div>
            <div data-aos="fade-down" className="flex justify-between items-center">
                <PieCharts />
                <Barchat />
            </div>
        </div>
    );
};

export default AdminHome;
