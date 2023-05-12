/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceArea = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://the-car-physician-server.vercel.app/get-services')
            .then((res) => res.json())
            .then((data) => setServices(data.services));
    }, []);

    return (
        <div>
            <h3 className="text-orange-600 text-xl font-bold text-center">Services</h3>
            <h1 className="text-5xl font-bold tracking-wider text-center py-5">Our Service Area</h1>
            <p className="text-gray-500 tracking-widest text-center mx-auto max-w-3xl">
                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            {/* services card */}
            <div className="grid grid-cols-3 justify-items-center gap-6 py-14">
                {services &&
                    services.map((service) => (
                        <div key={service._id} className="card w-96 border-2">
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt={service.title} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-start text-center space-y-5">
                                <h2 className="card-title text-2xl">{service.title}</h2>

                                <div className=" flex justify-between items-center w-full">
                                    <h2 className="card-title text-orange-600">Price: ${service.price}</h2>
                                    <Link to={`service-details/${service._id}`} state={service} type="button" className="btn btn-circle border-none btn-outline">
                                        <BsArrowRight className="text-3xl text-orange-600 hover:text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="flex justify-center items-center w-full">
                <button type="button" className="btn btn-outline text-xl btn-wide font-bold text-orange-500 border-orange-600">
                    More Services
                </button>
            </div>
        </div>
    );
};

export default ServiceArea;
