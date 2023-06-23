/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    return (
        <div className="card" style={{ width: '340px' }}>
            <Link to="instructor-details">
                <img
                    src="https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F50%2F2022%2F10%2F09%2Fbeing-a-productivity-guru-efficiency-tips-tricks-uplyrn.webp"
                    className="card-img-top"
                    alt="card-img"
                />
            </Link>
            <div className="card-body" style={{ cursor: 'grabbing' }}>
                <p className="card-text">Tj Walker</p>
                <h5 className="card-title">Being a Productivity Guru: Efficiency Tips & Tricks</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="leader text-gray">Appropriate for All</p>
                    <p className="leader text-gray">50m</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="leader" style={{ color: 'red', fontSize: '20px' }}>
                        $16.45{' '}
                        <span className="text-gray text-decoration-line-through" style={{ color: 'gray' }}>
                            $56.23
                        </span>
                    </p>

                    <button type="button" className="btn " data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Hello">
                        <AiOutlineHeart size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
