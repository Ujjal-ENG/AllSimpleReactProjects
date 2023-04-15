/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context-provider/AuthProviders';

function Register() {
    const { createUser } = useContext(AuthContext);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
    const { username, email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password, username);
        navigate('/login');
    };
    return (
        <div className=" h-screen">
            <h1 className="text-4xl py-5 font-bold text-center text-secondary">Register your Account</h1>
            <div className="flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input type="text" placeholder="name" id="username" value={username} onChange={handleChange} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" id="email" value={email} onChange={handleChange} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" id="password" value={password} onChange={handleChange} className="input input-bordered" />
                            <label className="label flex items-center justify-between">
                                <Link to="/login" className="label-text-alt btn-link font-bold link-hover">
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
                </form>
            </div>
        </div>
    );
}

export default Register;
