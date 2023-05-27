/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useCart from '../../../../hooks/useCart';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const UserCarts = () => {
    const [cart] = useCart();
    const totalPrice = Math.ceil(cart?.reduce((ps, cs) => ps + cs.price, 0));
    return (
        <div className=" w-full md:-ml-48 -ml-0 py-5">
            <Helmet>
                <title>Flavor|Flow - My Cart</title>
            </Helmet>
            <SharedTitle title="WANNA ADD MORE?" message="My Cart" />
            <div className="bg-white shadow-lg rounded-md p-5 max-w-[1500px] w-full">
                <div className="flex justify-between  mb-10 items-center">
                    <h1 className="uppercase text-2xl font-bold">Total Orders: {cart?.length}</h1>
                    <h1 className="uppercase text-2xl font-bold">Total Price: ${totalPrice}</h1>
                    <button type="button" className="btn bg-[#D1A054] text-white font-bold uppercase border-0 btn-md">
                        pay
                    </button>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table text-center w-full">
                        {/* head */}
                        <thead style={{ backgroundColor: '#D1A054' }}>
                            <tr className="uppercase">
                                <th />
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {cart &&
                                cart.map((el, idx) => (
                                    <tr key={el._id}>
                                        <th>{(idx += 1)}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={el.image} alt={el.name} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{el.name}</td>
                                        <td>{el.price}</td>
                                        <td>
                                            <button type="button" className="btn btn-error  border-0">
                                                <RiDeleteBin6Line className="text-2xl text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserCarts;