/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from '../layouts/sharedLayout/Container';
import CategoryBox from './CategoryBox';
import { categories } from './categoriesData';

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item, idx) => (
                    <CategoryBox key={idx} label={item.label} icon={item.icon} />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
