/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Charty from 'react-charty';

const ReachChart = () => {
    const BOX_OFFICE_DATA = {
        type: 'pie',
        data: {
            x: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],

            y0: [418894996, 375827476, 405950482, 350025489, 412599414, 356749803, 334756601, 363440937, 480825172, 299653307, 323532944],

            y1: [228907497, 272137386, 228669559, 267026649, 278874194, 297981308, 318724501, 349637236, 285649087, 368643283, 447980568],

            y2: [151729266, 244595555, 213973344, 187934565, 209883469, 164612977, 201036506, 245573737, 157334842, 147887868, 176581251]
        },
        names: {
            y0: 'Sales',
            y1: 'Marketing',
            y2: 'Operations'
        },
        colors: {
            y0: '#2373DB',
            y1: '#EC2049',
            y2: '#F26B38'
        }
    };

    return (
        <div className="container shadow-2xl px-5 py-2 max-h-[600px] mt-6">
            <h1 className="text-xl font-bold pt-7">Sales Report</h1>
            <Charty {...BOX_OFFICE_DATA} title="Sales Report" style={{ width: '100%', height: 500 }} tepX={1} startX={2015} endX={2024} />
        </div>
    );
};

export default ReachChart;
