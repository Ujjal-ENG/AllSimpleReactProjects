/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted, isValid }
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const validatePassword = (value) => {
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Password is required.';
        } else if (value.length < 6) {
            errorMessage = 'Password must be at least 6 characters long.';
        } else if (!/(?=.*[a-z])/.test(value)) {
            errorMessage = 'Password must contain at least one lowercase letter.';
        } else if (!/(?=.*[A-Z])/.test(value)) {
            errorMessage = 'Password must contain at least one uppercase letter.';
        } else if (!/(?=.*\d)/.test(value)) {
            errorMessage = 'Password must contain at least one digit.';
        }

        return errorMessage || true;
    };

    return (
        <form className="flex flex-col space-y-4 max-w-7xl mx-auto my-12" onSubmit={handleSubmit(onSubmit)}>
            <input className="border border-gray-300 px-4 py-2 rounded-md" {...register('firstName', { required: true, maxLength: 20 })} placeholder="First Name" />
            <input className="border border-gray-300 px-4 py-2 rounded-md" {...register('lastName', { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" />
            <input className="border border-gray-300 px-4 py-2 rounded-md" type="number" {...register('age', { min: 18, max: 99 })} placeholder="Age" />
            {errors.age && <p className="text-red-500">Age is between 18 to 99</p>}
            <input className="border border-gray-300 px-4 py-2 rounded-md" type="password" {...register('password', { validate: validatePassword })} placeholder="Password" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            {isSubmitted && isValid && !errors.password && <p className="text-green-500">Password meets the criteria.</p>}
            <input className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit" />
        </form>
    );
};

export default Form;
