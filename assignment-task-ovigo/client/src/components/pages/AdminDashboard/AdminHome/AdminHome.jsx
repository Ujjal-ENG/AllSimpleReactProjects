/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import AdminGreet from './AdminGreet';

const AdminHome = () => {
    // const [axiosSecure] = useAxiosSecure(null);
    // const [datas, setDatas] = useState('');
    // useEffect(() => {
    //     axiosSecure.get('http://localhost:8080/admin-stats').then((data) => setDatas(data.data));
    // }, []);
    return (
        <div>
            <AdminGreet />
        </div>
    );
};

export default AdminHome;
