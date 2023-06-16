/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const SearchCard = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <img
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="hotel-room"
                    className="w-[450px] h-auto p-5 rounded-2xl"
                />

                <div className="w-full px-5 py-2 space-y-4">
                    <div className="flex justify-between">
                        <h2 className=" text-3xl font-bold text-blue-600">Hotel Cox View </h2>
                        <p className="uppercase text-xl tracking-wider">
                            Excellent <span className="badge badge-primary text-xl font-bold text-white">7.5</span>{' '}
                        </p>
                    </div>
                    <p className="tracking-wide font-semibold">750m from the City</p>
                    <div className="badge badge-success text-xl">Free Air Port Taxi</div>
                    <h4 className="text-xl font-bold tracking-wider">Experience World Class Service</h4>
                    <p className="w-80 line-clamp-2">Located in near Cox Bazar Sea Beach, and bus stand few hundred yards away, this...</p>
                    <h3 className="text-green-500 font-bold text-2xl">Free Cancellation</h3>
                    <h3 className="text-green-500 text-sm">You can cancel later, so lock in this great price toady!!</h3>
                    <div className="flex justify-end">
                        <h1 className="text-4xl text-blue-800 font-bold">$150</h1>
                    </div>
                    <div className="flex justify-end">
                        <h5 className="text-xl text-blue-800 font-bold">Includes Tax and Fees!!</h5>
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
