/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className=" h-screen">
            <h1 className="text-4xl py-5 font-bold text-center text-secondary">Register your Account</h1>
            <div className="flex justify-center items-center ">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input type="text" placeholder="name" id="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" id="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" id="password" className="input input-bordered" />
                            <label className="label flex items-center justify-between">
                                <Link to="/login" className="label-text-alt link link-hover">
                                    Already Have an account?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
