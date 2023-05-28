/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider';
import useCart from '../../../hooks/useCart';

const SharedCard = ({ items }) => {
    const { userInfo } = useContext(AuthContext);
    const [, refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const handleAddToCart = async (item) => {
        if (userInfo) {
            item.menuItemId = item._id;
            item.user = userInfo.email;
            try {
                const { data } = await axios.post('http://localhost:8080/carts', { item });
                if (data.success) {
                    refetch();
                    toast.success('Cart Items Added!!');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            const result = await Swal.fire({
                title: 'Please Login First for Add to Cart!!',
                text: "You won't be able to cart item without Login😒😒!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            });
            if (result.isConfirmed) {
                // Todo: Location relocation
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
    };

    return (
        <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src={items?.image} alt={items?.name} />
                    </a>

                    <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-black rounded-full "> $ {items?.price} </span>
                    </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-center">{items?.name}</h3>
                <p className="mt-4 text-base text-gray-600">{items?.recipe}</p>
                <div className="flex justify-center items-center py-4">
                    <button onClick={() => handleAddToCart(items)} type="button" className="btn btn-wide btn-outline border-0 border-b-4 border-b-yellow-600 text-yellow-500">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SharedCard;
