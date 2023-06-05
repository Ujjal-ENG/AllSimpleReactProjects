/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUtensils } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SharedTitle from '../../layouts/shared/SharedTitle';

const imgHoistingToken = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const UpdateDetails = () => {
    const { state } = useLocation();
    const [axiosSecure] = useAxiosSecure();
    const [loading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const price = parseInt(data.price, 10);
            data.price = price;
            data.image = state?.image;

            const response = await axiosSecure.patch(`/menu/${state?._id}`, data);
            if (response) {
                toast.success(response.data.message);
                reset();
                navigate(-1);
                setIsLoading(false);
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
                <title>Flavor|Flow - Update Item</title>
            </Helmet>
            <SharedTitle title="Update AN ITEM" message={"Manage's the Item?"} />
            <form onSubmit={handleSubmit(onSubmit)} className="ml-48 bg-slate-200 max-w-3xl p-10  rounded-md w-full space-y-9">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Recipe Name*</span>
                    </label>
                    <input
                        {...register('name', { required: true })}
                        defaultValue={state?.name}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-3xl"
                        required
                    />
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Category Name*</span>
                        </label>
                        <select defaultValue={state?.category} {...register('category')} className="select select-primary w-full max-w-xs">
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
                        <input
                            {...register('price', { required: true })}
                            defaultValue={state?.price}
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full "
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold text-black">Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} className="textarea textarea-primary w-full max-w-3xl" rows={6} defaultValue={state?.recipe} placeholder="Recipe Details" />
                </div>

                {loading ? (
                    <button type="button" className="btn">
                        <span className="loading btn-primary loading-spinner" />
                        loading
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        Update Item Details
                        <FaUtensils className="ml-3" />
                    </button>
                )}
            </form>
        </div>
    );
};

export default UpdateDetails;
