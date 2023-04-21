/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';
import bg from '../../../assets/bg1.png';
import Qzone1 from '../../../assets/qZone1.png';
import Qzone2 from '../../../assets/qZone2.png';
import Qzone3 from '../../../assets/qZone3.png';
import { AuthContext } from '../../../context/AuthProvide';

function RightNav() {
    const { createInGoogle } = useContext(AuthContext);

    return (
        <div>
            <h3 className="text-2xl font-bold pb-4">Login With</h3>
            <div className="space-y-3">
                <button type="button" className="btn-outlined" onClick={() => createInGoogle()}>
                    <FcGoogle />
                    Login with Google
                </button>
                <button type="button" className="btn-outlined">
                    <VscGithub />
                    Login with GitHub
                </button>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold">Find us On</h3>
                <div className="mt-3">
                    <button className=" btn-outlined">
                        <BsFacebook />
                        Facebook
                    </button>
                    <button className=" btn-outlined">
                        <BsTwitter />
                        Twitter
                    </button>
                    <button className=" btn-outlined">
                        <BsInstagram />
                        Instragram
                    </button>
                </div>
            </div>

            {/* Kids zone */}
            <div className="space-y-4 mt-4 p-2 rounded-md bg-gray-200">
                <h3 className="text-2xl font-bold">Q-zone</h3>
                <img src={Qzone1} alt="qzone1" />
                <img src={Qzone2} alt="qzone2" />
                <img src={Qzone3} alt="qzone3" />
            </div>

            <div className="card w-full mt-8 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src={bg} alt="Shoes" className="object-cover w-full" />
                </figure>
                <div className="card-body my-auto">
                    <h2 className="text-3xl tracking-wider font-bold text-center">Create an Amazing Newspaper</h2>
                    <p className="text-center tracking-widest">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-red-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightNav;
