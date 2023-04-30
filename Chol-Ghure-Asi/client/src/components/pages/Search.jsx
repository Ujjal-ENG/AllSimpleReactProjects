/* eslint-disable react/no-unescaped-entities */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Map from './Map';

function Search() {
    const loader = useLoaderData();

    const center = {
        lat: 40.7128,
        lng: -74.006
    };
    const zoom = 12;
    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>

            {/* divider */}
            <div className="grid grid-cols-12 justify-items-center py-5">
                <div className="col-span-8 space-y-6">
                    <h4 className="text-2xl font-bold pb-4">Stay in Cox's Bazar</h4>
                    {loader &&
                        loader.roomData.map((el) => (
                            <div key={el.id} className="flex justify-between items-start gap-5">
                                <div className="h-56 w-1/2">
                                    <img src={el.images} alt={el.name} className="h-full w-full object-cover rounded-md" />
                                </div>

                                <div className=" space-y-3 ">
                                    <h2 className="card-title">{el.name}</h2>
                                    <p className="text-gray-500 tracking-wider">4 guest {el.bed} beds 4 person 2 bath</p>
                                    <p className="text-gray-500  tracking-wider w-3/4">{el.description}</p>
                                    <p className="text-gray-500 tracking-wider">Cancellation fexibility availiable</p>

                                    <div className="flex justify-between items-center w-3/4">
                                        <div className="flex items-center justify-center gap-3">
                                            <p>star</p>
                                            <p>{el.star}</p>
                                            <p>10</p>
                                        </div>
                                        <div className="flex items-center justify-center ">
                                            <p className="font-bold">${el.price}/</p>
                                            <p className="text-gray-500">night</p>
                                            <p className="ml-8 text-gray-200">$10 local</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="col-span-4">
                    <Map center={[51.505, -0.09]} zoom={13} />
                </div>
            </div>
        </div>
    );
}

export default Search;
