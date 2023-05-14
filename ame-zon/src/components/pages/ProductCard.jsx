/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

function ProductCard(props) {
    const { name, price, ratings, img, seller } = props.data;
    const handleAddtoCart = (details) => {
        props.handleAddtoCart(details);
    };
    return (
        <>
            {/* making the each card */}
            <div className="w-[300px] h-[510px] rounded-md border-2 border-black relative">
                <img src={img && img} alt={name} className="w-[286px] h-[286px]  mx-auto p-2 rounded-md transition-all hover:scale-110" />

                <h3 className="font-semibold text-2xl whitespace-nowrap overflow-hidden text-ellipsis p-2 w-full hover:overflow-visible hover:whitespace-normal hover:text-clip hover:text-sm transition-all">
                    {name || 'Name does not contains'}
                </h3>
                <p className="text-xl p-2">Price: ${price || '00'}</p>

                <p className="text-gray-400 p-2">
                    Manufacturer:
                    {seller || 'Does not exits'}
                </p>
                <p className="text-gray-400 p-2">
                    Rating:
                    {ratings || '0'} star
                </p>

                <button
                    className="w-full py-2 bg-orange-300 border-2 border-gray-400 text-xl flex justify-center items-center gap-2 absolute bottom-0 rounded-b-md active:bg-orange-600 transition-all"
                    type="button"
                    onClick={() => handleAddtoCart(props.data)}>
                    Add to Cart <BsCartPlusFill />
                </button>
            </div>
        </>
    );
}

export default ProductCard;
