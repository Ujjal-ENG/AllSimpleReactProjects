/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import img from '../../../assets/editorsInsight1.png';
import Editors from './Editors';

function News() {
    const getLocation = useLocation();

    return (
        <>
            <h1 className="text-2xl font-bold tracking-wider pb-10 ">Dragon News</h1>
            <div className="border-2 p-6 rounded-sm space-y-3">
                <img src={img} alt="" className="w-full" />
                <h1 className="text-2xl font-bold tracking-wider">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                <p className="text-gray-500 tracking-widest">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolores inventore eum culpa ea sed voluptatum corrupti, modi cupiditate ducimus rerum quo quas tempore vel
                    adipisci quasi, dolorum natus harum.
                </p>
                <div>
                    <Link to={getLocation.state.pathname} className="btn text-white btn-md btn-ghost bg-red-500">
                        <AiOutlineArrowLeft className="text-3xl mr-2" />
                        All News In this Category
                    </Link>
                </div>
            </div>

            <Editors />
        </>
    );
}

export default News;
