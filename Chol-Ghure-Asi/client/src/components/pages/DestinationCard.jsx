/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

function DestinationCard({ data }) {
    const { destination } = data;
    const {
        name,
        description,
        region,
        image_url,
        best_time_to_visit,
        activities,
        top_attractions,
        weather: { rainfall, temperature }
    } = destination;
    return (
        <div className="shadow-xl px-5 my-4 duration-200 transition-all ease-in-out hover:shadow-2xl">
            <div className="flex justify-between rounded-md overflow-hidden shadow-lg px-3">
                <img className="w-full max-w-xs rounded-xl h-64 object-cover my-auto" src={image_url} alt={name} />
                <div className="px-4 py-4">
                    <div>
                        <h2 className="font-bold mb-2 text-center text-2xl">{name}</h2>
                        <p className="text-gray-700 text-base mb-2 text-center">{description}</p>
                        <p className="text-gray-700 text-center pb-3 font-bold text-xl">Region: {region}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Top Attractions</h3>
                            <ul className="list-disc pl-5 mb-2">
                                {top_attractions.map((el, idx) => (
                                    <li key={idx}>{el}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Activities</h3>
                            <ul className="list-disc pl-5 mb-2">
                                {activities.map((el, idx) => (
                                    <li key={idx}>{el}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2">Weather</h3>
                            <p className="text-gray-700 text-base mb-2">
                                Average Temperature: {temperature.average_high}, Low {temperature.average_low}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                Rainfall: Average {rainfall.average}, Rainy Season {rainfall.rainy_season}
                            </p>
                            <p className="text-gray-700 text-base mb-2">Best Time to Visit: {best_time_to_visit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
