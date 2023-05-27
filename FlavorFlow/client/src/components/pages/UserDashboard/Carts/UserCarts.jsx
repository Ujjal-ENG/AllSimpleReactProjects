/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const UserCarts = () => {
    // const [cart] = useCart();
    return (
        <div className=" w-full md:-ml-48 -ml-0 py-5">
            <Helmet>
                <title>Flavor|Flow - My Cart</title>
            </Helmet>
            <SharedTitle title="WANNA ADD MORE?" message="My Cart" />
            <div className="bg-white shadow-lg rounded-md p-5 max-w-[1500px] w-full">
                <div className="flex justify-between  mb-10 items-center">
                    <h1 className="uppercase text-2xl font-bold">Total Orders: 7</h1>
                    <h1 className="uppercase text-2xl font-bold">Total Price: $74</h1>
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
                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserCarts;
