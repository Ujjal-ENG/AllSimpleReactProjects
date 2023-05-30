import React, { useState } from 'react';

const FilteredTable = () => {
    const [data, setData] = useState([
        {
            id: 1,
            company: 'Company A',
            orders: 120,
            returns: 10
        },
        {
            id: 2,
            company: 'Company B',
            orders: 85,
            returns: 5
        },
        {
            id: 3,
            company: 'Company C',
            orders: 150,
            returns: 20
        },
        {
            id: 4,
            company: 'Company D',
            orders: 100,
            returns: 15
        },
        {
            id: 5,
            company: 'Company E',
            orders: 75,
            returns: 8
        }
    ]);

    const [filteredData, setFilteredData] = useState(data);
    const [sortKey, setSortKey] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);

    const handleFilter = (event) => {
        const value = event.target.value.toLowerCase();
        const filtered = data.filter((item) => item.company.toLowerCase().includes(value));
        setFilteredData(filtered);
    };

    const handleSort = (key) => {
        if (sortKey === key) {
            // If already sorted by the same key, reverse the sort direction
            setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
        } else {
            // Sort by the new key in ascending order by default
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const sortedData = [...filteredData].sort((a, b) => {
        // Compare the values based on the selected sort key and direction
        if (sortKey === 'orders') {
            return sortDirection === 'asc' ? a.orders - b.orders : b.orders - a.orders;
        }
        if (sortKey === 'returns') {
            return sortDirection === 'asc' ? a.returns - b.returns : b.returns - a.returns;
        }
        return 0;
    });

    return (
        <div className="container mx-auto">
            <div className="my-4">
                <input type="text" placeholder="Filter by Company Name" className="p-2 border border-gray-300 rounded" onChange={handleFilter} />
            </div>
            <span className="text-red-500 font-bold">Sort By table Order and Returns</span>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('company')}>
                            Company
                            {sortKey === 'company' && <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('orders')}>
                            Orders
                            {sortKey === 'orders' && <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('returns')}>
                            Returns
                            {sortKey === 'returns' && <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.company}</td>
                            <td className="border px-4 py-2">{item.orders}</td>
                            <td className="border px-4 py-2">{item.returns}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilteredTable;
