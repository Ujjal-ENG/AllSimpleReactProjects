import React from 'react';
import Navbar from '../layouts/shared/Navbar';
import ReachChart from './chart/ReactChart';
import ReactTablesCharts from './chart/ReactTablesCharts';

const Test = () => {
    return (
        <div className="px-4 py-2">
            <Navbar />
            <div className="grid grid-cols-3 gap-4">
                <ReachChart />
                <ReactTablesCharts />
            </div>
        </div>
    );
};

export default Test;
