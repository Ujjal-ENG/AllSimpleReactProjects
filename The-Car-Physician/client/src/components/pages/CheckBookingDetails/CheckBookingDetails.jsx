import axios from 'axios';
import React, { useContext, useState } from 'react';
import BannerImg from '../../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../../context/AuthProvider';

const CheckBookingDetails = () => {
    const { userInfo } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    (async () => {
        const { data } = await axios.get(`http://localhost:8080/booking?email=${userInfo.email}`);
        console.log(data);
    })();
    return (
        <div>
            <div className="hero h-[300px] rounded-xl mb-36" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="hero-overlay bg-gradient-to-r from-gray-900 to-transparent rounded-xl" />
                <div className="hero-content text-start text-neutral-content relative">
                    <div className="w-screen ml-20">
                        <h1 className="mb-5 text-5xl font-bold">Booking Details</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckBookingDetails;
