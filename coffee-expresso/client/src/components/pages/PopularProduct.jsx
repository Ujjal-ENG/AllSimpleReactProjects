/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopularProduct = ({ data }) => {
    const { _id, name, chef, photo } = data;
    return (
        <div className="card card-side bg-gray-200 max-w-3xl w-full duration-200 transition-all ease-in-out shadow-xl hover:shadow-2xl hover:translate-y-2">
            <figure>
                <img src={photo} alt={name} className="w-60 h-52 object-cover p-8" />
            </figure>
            <div className="flex justify-between items-center">
                <div className=" mx-2 space-y-2 w-[220px]">
                    <h2 className="card-title flex items-center">
                        Name: <span className="font-normal tracking-tighter text-md">{name}</span>
                    </h2>
                    <h2 className="card-title">
                        Chef: <span className="font-normal  text-md">{chef}</span>
                    </h2>
                    <h2 className="card-title">
                        Price: <span className="font-normal text-md">$80</span>
                    </h2>
                </div>
                <div className="card-actions flex justify-end items-end border-2 relative">
                    <div className="btn-group btn-group-vertical space-y-1 absolute -right-28 -bottom-20">
                        <Link to={`/view-coffee/${_id}`} type="button" className="bg-[#E3B577] p-2 rounded-md ">
                            <AiFillEye className="text-4xl  text-white cursor-pointer mx-auto" />
                        </Link>
                        <Link state={data} to={`/update-coffee/${_id}`} type="button" className="bg-black p-2 rounded-md">
                            <FaEdit className="text-4xl  text-white cursor-pointer mx-auto" />
                        </Link>
                        <button type="button" className="bg-red-400 p-2 rounded-md">
                            <AiFillDelete className="text-4xl  text-white cursor-pointer mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;
