/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Navbar from '../layouts/Navbar';

function Search() {
    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>

            {/* divider */}
            <div className="grid grid-cols-12 justify-items-center py-5">
                <div className="col-span-8">
                    <h4 className="text-2xl font-bold pb-4">Stay in Cox's Bazar</h4>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src="https://images.pexels.com/photos/4457041/pexels-photo-4457041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Movie" className="h-52 w-full object-contain" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button type="button" className="btn btn-primary">
                                    Watch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <h1>map here</h1>
                </div>
            </div>
        </div>
    );
}

export default Search;
