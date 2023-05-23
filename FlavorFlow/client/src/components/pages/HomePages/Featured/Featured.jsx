/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
import React from 'react';
import img from '../../../../assets/home/featured.jpg';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import './featured.css';

const Featured = () => {
    return (
        <div className="mt-10 mb-20 bg-fixed featured-item pb-20">
            <div className=" px-4 w-full flex justify-center items-center flex-col">
                <SharedTitle message="Check It Out" title="FROM OUR MENU" />

                <div className="flex justify-center items-center gap-20">
                    <img src={img} alt="featured-img" className="max-w-3xl h-96" />
                    <div className="max-w-lg relative">
                        <div className="absolute bg-slate-600 top-0 right-0" />
                        <h2 className="text-xl font-semibold leading-tight text-white py-3">October 21, 2024</h2>
                        <h2 className="text-xl font-semibold leading-tight text-white uppercase">Where can i get some?</h2>
                        <p className="mt-4 text-base text-gray-200">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem possimus voluptatem nam accusamus nulla placeat veritatis nihil repellendus sit explicabo. Rem reiciendis
                            quibusdam eum dignissimos repellat mollitia neque. Itaque doloribus quibusdam accusamus numquam debitis assumenda culpa, provident illo velit odio omnis? Quod doloribus quo
                            exercitationem eligendi distinctio expedita similique aliquid.
                        </p>
                    </div>
                </div>
                <button type="button" className="btn btn-wide mt-8 text-white btn-outline border-0 border-b-4">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Featured;
