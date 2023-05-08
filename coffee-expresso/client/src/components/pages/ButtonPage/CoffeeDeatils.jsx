/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CoffeeDeatils = () => {
    return (
        <div>
            <Link to="/" className="flex justify-start text-2xl font-bold items-center gap-2 my-container">
                <AiOutlineArrowLeft />
                Back to Home
            </Link>
            <div className="hero min-h-[70vh] bg-base-200 my-container rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">StartBuks Coffee</h1>
                        <div className=" mx-2 space-y-2 py-6">
                            <h2 className="card-title">
                                Name: <span className="font-normal text-md">Americano Coffee</span>
                            </h2>
                            <h2 className="card-title">
                                Chef: <span className="font-normal text-md">Ujjal Roy</span>
                            </h2>
                            <h2 className="card-title">
                                Supplier: <span className="font-normal text-md">Pappue AUthorize</span>
                            </h2>
                            <h2 className="card-title">
                                Taste: <span className="font-normal text-md">Sweet and Cold</span>
                            </h2>
                            <h2 className="card-title">
                                Category: <span className="font-normal text-md">Americano</span>
                            </h2>
                            <h2 className="card-title">
                                Details: <span className="font-normal text-md">Express with Cold ice and bean powerder in the upper coffee cups</span>
                            </h2>
                            <h2 className="card-title">
                                Price: <span className="font-normal text-md">$80</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img
                                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/D2B4/production/_128704935_20230221-starbucks-oleato-golden-cold-foam-handoff.jpg"
                                alt="coffee"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDeatils;
