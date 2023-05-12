/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { SiFacebook, SiGoogle, SiLinkedin } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../context/AuthProvider';
import Navbar from '../../layouts/shared/Navbar';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const from = state?.from?.pathname || '/';
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInUser(email, password);
        navigate(from);
    };
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Email</span>
                                </label>
                                <input type="text" id="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Password</span>
                                </label>
                                <input type="password" id="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/forgot-password" className="text-orange-600 font-bold">
                                        Forgot Password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-xl font-bold bg-orange-600 border-none">
                                    Log In
                                </button>

                                <p className="text-center tracking-wide py-10 font-semibold">Or Log In with</p>
                                <div className="flex justify-center items-center gap-6">
                                    <button type="button" className="btn btn-circle bg-transparent">
                                        <SiFacebook className="text-orange-600 text-3xl" />
                                    </button>
                                    <button type="button" className="btn btn-circle bg-transparent">
                                        <SiLinkedin className="text-orange-600 text-3xl" />
                                    </button>
                                    <button onClick={() => googleSignIn()} type="button" className="btn btn-circle bg-transparent">
                                        <SiGoogle className="text-orange-600 text-3xl" />
                                    </button>
                                </div>
                                <p className="text-center tracking-wide py-10 font-semibold">
                                    Are you New?
                                    <span>
                                        <Link to="/register" className="text-orange-600 font-bold">
                                            Register Please..
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={Logo} alt="logo" className="max-w-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
