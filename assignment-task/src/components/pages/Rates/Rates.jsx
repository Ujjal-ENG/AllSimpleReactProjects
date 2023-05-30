/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
// import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

const Rates = () => {
    const shareMarketData = [
        {
            title: 'Company A',
            rate: 100.5,
            updowns: '+2.5%',
            chartData: [90, 95, 105, 98, 110, 100, 95]
        },
        {
            title: 'Company B',
            rate: 75.2,
            updowns: '-1.8%',
            chartData: [80, 70, 85, 75, 72, 78, 75]
        },
        {
            title: 'Company C',
            rate: 120.3,
            updowns: '+3.2%',
            chartData: [110, 115, 125, 118, 130, 120, 115]
        },
        {
            title: 'Company D',
            rate: 90.8,
            updowns: '-0.5%',
            chartData: [95, 92, 88, 90, 85, 92, 90]
        }
    ];

    const drawLineChart = (chartData, canvas) => {
        const ctx = canvas.getContext('2d');
        const chartWidth = canvas.width;
        const chartHeight = canvas.height;
        const stepSizeX = chartWidth / (chartData.length - 1);

        // Find the minimum and maximum values in the chart data
        const minDataValue = Math.min(...chartData);
        const maxDataValue = Math.max(...chartData);

        // Calculate the scaling factors for the data values
        const dataRange = maxDataValue - minDataValue;
        const scaleY = chartHeight / dataRange;

        // Set up initial coordinates
        let prevX = 0;
        let prevY = chartHeight - (chartData[0] - minDataValue) * scaleY;

        // Draw the line chart
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        chartData.forEach((dataPoint, index) => {
            const x = index * stepSizeX;
            const y = chartHeight - (dataPoint - minDataValue) * scaleY;
            ctx.lineTo(x, y);
            prevX = x;
            prevY = y;
        });
        ctx.strokeStyle = '#5FB641';
        ctx.lineWidth = 2;
        ctx.stroke();
    };

    return (
        <div className="container mx-auto p-6 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {shareMarketData.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className={item.updowns.includes('+') ? 'text-green-500' : 'text-red-500'}>
                            {item.updowns.includes('+') ? <FiArrowUp className="inline" /> : <FiArrowDown className="inline" />}
                            {item.updowns}
                        </span>
                    </div>
                    <div className="text-gray-500">{item.rate}</div>
                    <canvas
                        ref={(canvas) => {
                            if (canvas) {
                                drawLineChart(item.chartData, canvas);
                            }
                        }}
                        width={180}
                        height={50}
                    />
                </div>
            ))}
        </div>
    );
};

export default Rates;
