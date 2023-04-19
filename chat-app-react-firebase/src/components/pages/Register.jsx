/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context-providers/AuthProviders';

function Register() {
    const { loading, createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        createUser(email, password, displayName);
        navigate('/login');
    };
    console.log(loading);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <form onSubmit={handleSubmit} className="card   shadow-2xl bg-base-100">
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

                        <div type="submit" className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
