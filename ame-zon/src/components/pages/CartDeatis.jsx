/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';

function CartDeatis(props) {
    const cart = props.data;
    const [isClicked, setIsClicked] = useState(true);
    let tax = 0;
    let grandTotal = 0;
    let totalQuantity = 0;
    let totalPrice = 0;
    let shippingCost = 0;
    for (const id of cart) {
        totalQuantity += id.quantity;
        totalPrice += id.price * id.quantity;
        shippingCost += id.shipping;
    }
    tax = Number(((totalPrice * 7) / 100).toFixed(2));
    grandTotal = totalPrice + tax + shippingCost;
    const navigate = useNavigate();

    const handleClearCart = () => {
        deleteShoppingCart();
        setIsClicked(!isClicked);
        navigate('/shop');
    };

    return (
        <div className="bg-orange-300 space-y-3 p-5 fixed right-10 my-20 rounded-lg">
            <h3 className="text-2xl text-center underline">Order Summary</h3>

            <p>
                Selected Items:
                {isClicked ? totalQuantity : 0}
            </p>
            <p>Total Price: ${isClicked ? totalPrice : 0}</p>
            <p>Total Shipping Cost: ${isClicked ? shippingCost : 0}</p>
            <p>Tax: ${isClicked ? tax : 0}</p>
            <p className="font-bold text-xl ">Grand Total: ${isClicked ? grandTotal : 0}</p>

            <button type="button" className="px-4 py-2 rounded-md bg-red-500 text-white w-full" onClick={handleClearCart}>
                Clear Cart
            </button>
            <Link type="button" className="px-4 py-2 rounded-md bg-yellow-500 text-white w-full text-center" to={props.link ? props.link : '/order-review'}>
                {props.name ? props.name : 'Review Order'}
            </Link>
        </div>
    );
}

export default CartDeatis;
