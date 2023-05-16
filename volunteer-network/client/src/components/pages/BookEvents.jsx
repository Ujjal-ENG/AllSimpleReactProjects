/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const BookEvents = () => {
    const [selectValue, setSelectValue] = useState('');
    const [formData, setFormData] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        data.skills = selectValue.map((el) => el.value);
        setFormData(data);
    };
    console.log(errors);
    console.log(formData);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const handleChange = (selectValue) => {
        setSelectValue(selectValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto mt-4">
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Full name</label>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full px-4 py-2 input-bordered input border-b border-gray-300 focus:border-indigo-500 focus:outline-none"
                        {...register('FullName', { required: true, maxLength: 80 })}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-500 focus:outline-none"
                        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 input-bordered input border-b border-gray-300 focus:border-indigo-500 focus:outline-none"
                        {...register('Password', {
                            required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-={}|;:'\",.<>?]).{8,}$/
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Mobile number</label>
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-500 focus:outline-none"
                        {...register('Mobile number', { required: true, minLength: 6, maxLength: 12 })}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Last name</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        className="w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-500 focus:outline-none"
                        {...register('Last name', { required: true, maxLength: 100 })}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Title</label>
                    <select className="w-full px-4 py-2 border-b border-gray-300 focus:border-indigo-500 focus:outline-none" {...register('Title', { required: true })}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <Select options={options} isMulti value={selectValue} onChange={handleChange} />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-xl font-semibold mb-2">Are you a developer?</label>
                    <div className="flex justify-between">
                        <input className="mr-2" type="radio" value="Yes" name="developer" {...register('Developer', { required: true })} />
                        <span className="text-sm">Yes</span>
                    </div>
                    <div className="flex justify-between">
                        <input className="mr-2" type="radio" value="No" name="developer" {...register('Developer', { required: true })} />
                        <span className="text-sm">No</span>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookEvents;
