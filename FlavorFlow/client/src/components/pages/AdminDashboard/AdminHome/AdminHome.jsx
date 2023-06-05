/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import AdminGreet from './AdminGreet';
import Barchat from './Barchat';
import PieChart from './PieChart';
import ReveneOrders from './ReveneOrders';

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure(null);
    const [datas, setDatas] = useState('');
    useEffect(() => {
        axiosSecure.get('http://localhost:8080/admin-stats').then((data) => setDatas(data.data));
    }, []);
    return (
        <div>
            <AdminGreet />
            <ReveneOrders data={datas} />
            <div className="grid grid-cols-2 pt-20 -ml-60">
                <Barchat />
                <PieChart />
            </div>
        </div>
    );
};

export default AdminHome;
