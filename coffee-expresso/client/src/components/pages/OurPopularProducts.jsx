/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cup from '../../assets/cup.png';
import SHop from '../../assets/shop.png';
import PopularProduct from './PopularProduct';

const OurPopularProducts = () => {
    const [coffees, setCoffees] = useState([]);
    // get all coffee data
    const getAllCoffeeData = async () => {
        try {
            const { data } = await axios.get('https://backend-blond-phi.vercel.app/all-coffees');
            if (data.success) {
                setCoffees(data.allCoffee);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCoffeeData();
    }, []);

    const handleDelete = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const { data } = axios.delete(`https://backend-blond-phi.vercel.app/delete-coffees/${id}`);
                    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    getAllCoffeeData();
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="relative">
            <img src={Cup} alt="cup" className="absolute hidden md:block  z-20 top-20" />
            <img src={SHop} alt="shop" className="absolute hidden md:block top-20 right-0" />

            <h4 className="text-2xl text-center py-2"> --- Sip & Savor ---</h4>
            <h1 className="text-5xl tracking-wider text-center pt-2 font-semibold">Our Popular Products</h1>
            <div className="w-full flex items-center justify-center pt-5 ">
                <Link to="/add-coffee" className="btn text-2xl font-bold flex items-center gap-3 btn-primary bg-[#E3B577]">
                    Add Coffee
                    <FaCoffee className="text-3xl font-bold text-black" />
                </Link>
            </div>

            {/* coffee cars */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-16 my-container">
                {coffees && coffees.map((coffee) => <PopularProduct key={coffee._id} data={coffee} handleDelete={handleDelete} />)}
            </div>
        </div>
    );
};

export default OurPopularProducts;
