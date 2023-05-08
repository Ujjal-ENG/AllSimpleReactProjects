/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDeatils = () => {
    const { coffee } = useLoaderData();
    const { name, chef, photo, supplier, taste, details, category } = coffee;
    return (
        <div>
            <Link to="/" className="flex justify-start text-2xl font-bold items-center gap-2 my-container">
                <AiOutlineArrowLeft />
                Back to Home
            </Link>
            <div className="hero min-h-[70vh] bg-base-200 my-container rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <div className=" mx-2 space-y-2 py-6">
                            <h2 className="card-title">
                                Name: <span className="font-normal text-md">{name}</span>
                            </h2>
                            <h2 className="card-title">
                                Chef: <span className="font-normal text-md">{chef}</span>
                            </h2>
                            <h2 className="card-title">
                                Supplier: <span className="font-normal text-md">{supplier}</span>
                            </h2>
                            <h2 className="card-title">
                                Taste: <span className="font-normal text-md">Sweet and Cold</span>
                            </h2>
                            <h2 className="card-title">
                                Category: <span className="font-normal text-md">{category}</span>
                            </h2>
                            <h2 className="card-title">
                                Details: <span className="font-normal text-md">{details}</span>
                            </h2>
                            <h2 className="card-title">
                                Price: <span className="font-normal text-md">$80</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src={photo} alt={name} className="object-cover max-w-md w-full h-96" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDeatils;
