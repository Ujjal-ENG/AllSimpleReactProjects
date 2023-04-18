/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card   shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Display Name</span>
                            </label>
                            <input type="text" placeholder="displayName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Avatar</span>
                            </label>
                            <input type="file" className="input " />
                        </div>

                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">
                                Already have an Account? Login
                            </Link>
                        </label>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
