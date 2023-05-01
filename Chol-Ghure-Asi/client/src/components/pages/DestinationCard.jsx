/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

function DestinationCard() {
    return (
        <div className="shadow-2xl px-5 my-4">
            <div className="flex justify-between rounded-md overflow-hidden shadow-lg px-3">
                <img
                    className="w-full max-w-xs rounded-xl h-64 object-cover my-auto"
                    src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Paharpur"
                />
                <div className="px-4 py-4">
                    <div>
                        <h2 className="font-bold mb-2 text-center text-2xl">Paharpur</h2>
                        <p className="text-gray-700 text-base mb-2 text-center">An archaeological site in northern Bangladesh that was once a center of Buddhist learning.</p>
                        <p className="text-gray-700 text-center pb-3 font-bold text-xl">Region: Rajshahi Division</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Top Attractions</h3>
                            <ul className="list-disc pl-5 mb-2">
                                <li>Paharpur Museum</li>
                                <li>Somapura Mahavihara</li>
                                <li>The ruins of the ancient city</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Activities</h3>
                            <ul className="list-disc pl-5 mb-2">
                                <li>Archaeological Tours</li>
                                <li>Historical Exploration</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2">Weather</h3>
                            <p className="text-gray-700 text-base mb-2">Average Temperature: High 29°C, Low 17°C</p>
                            <p className="text-gray-700 text-base mb-2">Rainfall: Average 1200-1400 mm, Rainy Season June-September</p>
                            <p className="text-gray-700 text-base mb-2">Best Time to Visit: November - February</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
