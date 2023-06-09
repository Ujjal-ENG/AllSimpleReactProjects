/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const PieCharts = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: pieChart = [] } = useQuery({
        queryKey: ['pie-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    });
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={400}>
                <Pie data={pieChart} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="count">
                    {pieChart.map((entry, index) => (
                        <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieCharts;
