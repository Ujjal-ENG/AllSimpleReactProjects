/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const ModalEdit = ({ data }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            const data2 = await axios.patch(`http://localhost:8080/update-events/${data._id}`, { formData });
            console.log(data2.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative  max-w-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold text-center py-4 tracking-wider">Update the Events</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter title"
                                {...register('title')}
                                defaultValue={data?.title}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                                Image URL
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                name="image"
                                type="text"
                                placeholder="Enter image URL"
                                {...register('image')}
                                defaultValue={data?.image}
                            />
                        </div>
                        <button value="Save" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>

                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">
                            ✕
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;
