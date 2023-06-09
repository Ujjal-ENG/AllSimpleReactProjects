/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import BannerImg from '../../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const CheckOut = () => {
    useTitle('CheckOut');
    const { id } = useParams();
    const { singleService } = useLoaderData();
    const { userInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        const amount = `$ ${e.target.amount.value}`;
        const serviceInfo = {
            CustomerName: name,
            BookingDate: date,
            CustomerEmail: email,
            amount,
            serviceID: id,
            serviceImg: singleService.img,
            serviceName: singleService.title
        };

        try {
            const { data } = await axios.post('https://the-car-physician-server.vercel.app/bookings', { serviceInfo });
            if (data.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="hero h-[300px] rounded-xl mb-36" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-gray-900 to-transparent rounded-xl" />
                <div className="hero-content text-start text-neutral-content relative">
                    <div className="w-screen ml-20">
                        <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 p-10 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 items-center gap-9">
                        <div>
                            <label htmlFor="Name" className="label ">
                                <span className="label-text text-xl font-bold ">Name</span>
                            </label>
                            <input type="text" defaultValue={userInfo.displayName} required id="name" placeholder="Name" className="input input-bordered input-error w-full " />
                        </div>
                        <div>
                            <label htmlFor="Date" className="label">
                                <span className="label-text text-xl font-bold ">Date</span>
                            </label>
                            <input type="date" required id="date" className="input input-bordered input-error w-full " />
                        </div>
                        <div>
                            <label htmlFor="email" className="label">
                                <span className="label-text text-xl font-bold ">Email</span>
                            </label>
                            <input type="email" defaultValue={userInfo.email} id="email" required placeholder="jon@gmail.com" className="input input-bordered input-error w-full " />
                        </div>
                        <div>
                            <label htmlFor="amount" className="label">
                                <span className="label-text text-xl font-bold">Amount</span>
                            </label>
                            <input type="number" id="amount" required placeholder="$40" className="input input-bordered input-error w-full " />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block my-8 bg-orange-600 text-2xl font-bold border-none">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
