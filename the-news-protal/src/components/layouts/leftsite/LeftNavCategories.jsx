/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LeftNavCategories() {
    const [category, setCategory] = useState([]);

    const fetchData = async () => {
        const fetChURL = await fetch('http://localhost:3000/categories');
        const data = await fetChURL.json();
        setCategory(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="space-y-3">
            {category &&
                category.map((el) => (
                    <Link to={`category/${el.id}`} key={el.id} type="button" className="btn btn-wide  btn-ghost  font-semibold">
                        {el.name}
                    </Link>
                ))}
        </div>
    );
}

export default LeftNavCategories;
