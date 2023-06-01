/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const imgHoistingToken = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const imgHoistingUrl = `https://api.imgbb.com/1/upload?key=${imgHoistingToken}`;
    const onSubmit = async (data) => {
        setIsLoading(true);
        const fromData = new FormData();
        const price = parseInt(data.price, 10);
        data.price = price;
        fromData.append('image', data.image[0]);
        try {
            const res = await axios.post(imgHoistingUrl, fromData);
            // data.image = res..imgHoistingUrl

            if (res.data.success) {
                const imgURL = res.data.data.display_url;
                data.image = imgURL;

                const response = await axiosSecure.post('/menu', data);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setIsLoading(false);
                }
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="md:-ml-36 -ml-0 ">
            <Helmet>
                <title>Flavor|Flow - Add Item</title>
            </Helmet>
            <SharedTitle title="ADD AN ITEM" message={"What's New?"} />
            <form onSubmit={handleSubmit(onSubmit)} className="ml-48 bg-slate-200 max-w-3xl p-10  rounded-md w-full space-y-9">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Recipe Name*</span>
                    </label>
                    <input {...register('name', { required: true })} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-3xl" required />
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Category Name*</span>
                        </label>
                        <select defaultValue="Pick One" {...register('category')} className="select select-primary w-full max-w-xs">
                            <option disabled>Category</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="salad">Salad</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text font-bold text-black">Price*</span>
                        </label>
                        <input {...register('price', { required: true })} type="number" placeholder="Type here" className="input input-bordered input-primary w-full " required />
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold text-black">Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} className="textarea textarea-primary w-full max-w-3xl" rows={6} placeholder="Recipe Details" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold text-black">Item Image*</span>
                    </label>
                    <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>

                {loading ? (
                    <button type="button" className="btn">
                        <span className="loading btn-primary loading-spinner" />
                        loading
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        Add Item
                        <FaUtensils className="ml-3" />
                    </button>
                )}
            </form>
        </div>
    );
};

export default AddItem;
