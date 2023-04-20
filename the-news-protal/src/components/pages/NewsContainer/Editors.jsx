/* eslint-disable react/jsx-indent */
import React from 'react';
import card1 from '../../../assets/1.png';
import card2 from '../../../assets/2.png';
import card3 from '../../../assets/3.png';

function Editors() {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-wider pt-10 ">Editors Insight</h1>
            <div className="flex pt-5 w-full gap-4">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={card1} alt="Shoes" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                        <div className="card-actions justify-between ">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={card2} alt="Shoes" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                        <div className="card-actions justify-between ">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={card3} alt="Shoes" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                        <div className="card-actions justify-between ">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Editors;
