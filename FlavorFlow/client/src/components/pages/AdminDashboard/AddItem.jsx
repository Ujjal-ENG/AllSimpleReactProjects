/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import SharedTitle from '../../layouts/shared/SharedTitle';

const AddItem = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);

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
                    <input {...register('recipeName', { required: true })} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-3xl" required />
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Category Name*</span>
                        </label>
                        <select {...register('category')} className="select select-primary w-full max-w-xs">
                            <option disabled selected>
                                Category
                            </option>
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
                    <textarea {...register('recipeDetails', { required: true })} className="textarea textarea-primary w-full max-w-3xl" rows={6} placeholder="Recipe Details" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold text-black">Item Image*</span>
                    </label>
                    <input {...register('recipeImg', { required: true })} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>

                <button type="submit" className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    Add Item
                    <FaUtensils className="ml-3" />
                </button>
            </form>
        </div>
    );
};

export default AddItem;
