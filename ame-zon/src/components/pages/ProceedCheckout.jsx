/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export function ProceedCheckout() {
    return (
        <div className="min-h-screen mt-14 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h2 className="text-2xl font-bold leading-8 text-gray-900">Checkout</h2>
                                <div>
                                    <label className="leading-loose">Full Name</label>
                                    <input type="text" className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-white" placeholder="Enter your full name" />
                                </div>
                                <div>
                                    <label className="leading-loose">Email</label>
                                    <input type="text" className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-white" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <label className="leading-loose">Card Number</label>
                                    <input type="text" className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-white" placeholder="Enter your card number" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <label className="leading-loose">Expiration Date</label>
                                        <input type="text" className="w-24 px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-white" placeholder="MM / YY" />
                                    </div>
                                    <div>
                                        <label className="leading-loose">CVV</label>
                                        <input type="text" className="w-24 px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-white" placeholder="CVV" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Submit Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
