/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const SharedCard = ({ id, img, name, price, recipe }) => {
    const handleAddToCart = (item) => {
        console.log(item);
    };
    return (
        <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src={img} alt={name} />
                    </a>

                    <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-black rounded-full "> $ {price} </span>
                    </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-center">{name}</h3>
                <p className="mt-4 text-base text-gray-600">{recipe}</p>
                <div className="flex justify-center items-center py-4">
                    <button onClick={() => handleAddToCart(id)} type="button" className="btn btn-wide btn-outline border-0 border-b-4 border-b-yellow-600 text-yellow-500">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SharedCard;
