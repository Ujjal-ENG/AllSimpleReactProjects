/* eslint-disable react/no-unescaped-entities */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const UserCarts = () => {
    const [cart, refetch] = useCart();
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:8080/carts/${id}`);
                Swal.fire('Deleted!', 'Your Food Item has been deleted.', 'success');
                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };
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
                    <Link to="/dashboard/payment" state={cart} type="button" className="btn bg-[#D1A054] text-white font-bold uppercase border-0 btn-md">
                        pay
                    </Link>
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
                            {cart.map((el, idx) => (
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
                                        <button onClick={() => handleDelete(el._id)} type="button" className="btn btn-error  border-0">
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
