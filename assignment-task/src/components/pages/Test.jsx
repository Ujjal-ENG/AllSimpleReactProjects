import React from 'react';
import Navbar from '../layouts/shared/Navbar';
import FilteredTable from './FIlteredTable';
import Rates from './Rates/Rates';
import ReachChart from './chart/ReactChart';
import ReactTablesCharts from './chart/ReactTablesCharts';

const Test = () => {
    return (
        <div className=" bg-slate-100">
            <Navbar />
            <div className="flex justify-evenly">
                <Rates />
                <h1>hell</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-2">
                <ReachChart />
                <ReactTablesCharts />
                <FilteredTable />
            </div>
        </div>
    );
};

export default Test;
