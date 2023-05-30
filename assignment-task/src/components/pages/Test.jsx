import React from 'react';
import Navbar from '../layouts/shared/Navbar';
import Rates from './Rates/Rates';
import ReachChart from './chart/ReactChart';
import ReactTablesCharts from './chart/ReactTablesCharts';

const Test = () => {
    return (
        <div className="px-4 py-2 bg-slate-100">
            <Navbar />
            <Rates />
            <div className="grid grid-cols-3 gap-4">
                <ReachChart />
                <ReactTablesCharts />
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Test;
