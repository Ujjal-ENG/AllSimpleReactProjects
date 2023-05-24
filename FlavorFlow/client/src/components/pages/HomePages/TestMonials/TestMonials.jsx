/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import Reviews from './Reviews';

const TestMonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data.data));
    }, []);

    return (
        <div>
            <SharedTitle message="What Our clients Say" title="TESTIMONIALS" />
            <Reviews data={reviews} />
        </div>
    );
};

export default TestMonials;
