/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import AdminGreet from './AdminGreet';
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
        </div>
    );
};

export default AdminHome;
