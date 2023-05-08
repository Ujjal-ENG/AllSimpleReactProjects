/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../../layouts/shared/Input';

const UpdateCoffeDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        chef: '',
        supplier: '',
        taste: '',
        category: '',
        details: '',
        photo: ''
    });

    const handleChange = (e) => {
        setFormData((ps) => ({
            ...ps,
            [e.target.id]: e.target.value
        }));
    };
    return (
        <div className="my-container">
            <Link to="/" className="flex justify-start text-2xl font-bold items-center gap-2">
                <AiOutlineArrowLeft />
                Back to Home
            </Link>

            <form action="" className="bg-slate-200 p-10 my-14 rounded-md">
                <h1 className="text-5xl tracking-wider text-center pt-2 font-semibold">Update Existing Coffee Details</h1>
                <p className="text-gray-500 tracking-wider py-6 max-w-3xl text-center mx-auto">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <div className="grid grid-cols-2 gap-10">
                    <Input label="Name" id="name" type="text" placeholder="Enter Coffee Name" value={formData.name} change={handleChange} />
                    <Input label="Chef" id="chef" type="text" placeholder="Enter Coffee Chef Name" value={formData.chef} change={handleChange} />
                    <Input label="Supplier" id="supplier" type="text" placeholder="Enter Coffee Supplier Name" value={formData.supplier} change={handleChange} />
                    <Input label="Taste" id="taste" type="text" placeholder="Enter Coffee Taste Name" value={formData.taste} change={handleChange} />
                    <Input label="Category" id="category" type="text" placeholder="Enter Coffee Category Name" value={formData.category} change={handleChange} />
                    <Input label="Details" id="details" type="text" placeholder="Enter Coffee Details " value={formData.details} change={handleChange} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-xl font-bold">Photo URL</span>
                    </label>
                    <input type="text" id="photo" value={formData.photo} onChange={handleChange} placeholder="Enter the Photo URL" className="input input-bordered input-primary w-full max-w-7xl" />
                </div>
                <Link to="/add-coffee" className="btn my-5 text-2xl font-bold flex items-center gap-3 btn-primary bg-[#E3B577]">
                    Update Existing Coffee Details
                    <FaCoffee className="text-3xl font-bold text-black" />
                </Link>
            </form>
        </div>
    );
};
export default UpdateCoffeDetails;
