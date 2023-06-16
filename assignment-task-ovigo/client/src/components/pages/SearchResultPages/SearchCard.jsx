/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const SearchCard = ({ data }) => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <img src={data?.imageURL} alt={data?.hotelName} className="w-[450px] h-[450px] p-5 rounded-2xl" />

                <div className="w-full px-5 py-2 space-y-4">
                    <div className="flex justify-between">
                        <h2 className=" text-3xl font-bold text-blue-600">{data?.hotelName} </h2>
                        {data?.rating > 7.0 ? (
                            <p className="uppercase text-xl tracking-wider">
                                Excellent <span className="badge badge-primary text-xl font-bold text-white">{data?.rating}</span>
                            </p>
                        ) : (
                            <p className="uppercase text-xl tracking-wider">
                                Good <span className="badge badge-secondary text-xl font-bold text-white">{data?.rating}</span>
                            </p>
                        )}
                    </div>
                    <p className="tracking-wide font-semibold">{data?.distanceFromForest}</p>
                    <div className="badge badge-success text-xl">Free Air Port Taxi</div>
                    <h4 className="text-xl font-bold tracking-wider">Experience World Class Service</h4>
                    <p className="w-80 line-clamp-2">{data?.description}...</p>
                    <h3 className="text-green-500 font-bold text-2xl">Free Cancellation</h3>
                    <h3 className="text-green-500 text-sm">You can cancel later, so lock in this great price toady!!</h3>
                    <div className="flex justify-end">
                        <h1 className="text-4xl text-blue-800 font-bold">${data?.price}</h1>
                    </div>
                    <div className="flex justify-end">
                        {data?.includesTaxAndFees ? (
                            <h5 className="text-xl text-blue-800 font-bold">Includes Tax and Fees!!</h5>
                        ) : (
                            <h5 className="text-xl text-red-400 font-bold">Not Includes Tax and Fees!!</h5>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-primary  border-none text-xl font-bold text-white  bg-blue-700 hover:bg-black px-5">
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
