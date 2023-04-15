/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className="flex justify-center items-center  h-screen flex-col">
            <h1 className="text-4xl pb-4 font-bold text-center text-secondary">Forgot Password</h1>
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label flex items-center justify-between">
                            <Link to="/login" className="label-text-alt link link-hover">
                                Already Have an account?
                            </Link>
                            <Link to="/register" className="label-text-alt link link-hover">
                                Are you New?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            ForGot Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
