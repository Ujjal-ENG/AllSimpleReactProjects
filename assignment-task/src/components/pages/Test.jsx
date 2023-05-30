import React from 'react';
import Navbar from '../layouts/shared/Navbar';
import FilteredTable from './FIlteredTable';
import Rates from './Rates/Rates';
import ReachChart from './chart/ReactChart';
import ReactTablesCharts from './chart/ReactTablesCharts';

const Test = () => {
    return (
        <div className="px-4 py-2 bg-slate-100">
            <Navbar />
            <div className="flex justify-between">
                <Rates />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <ReachChart />
                <ReactTablesCharts />
                <FilteredTable />
            </div>
        </div>
    );
};

export default Test;
