/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { SiFacebook, SiGoogle, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        createUser(name, photo, email, password);
    };
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Name</span>
                                </label>
                                <input type="text" id="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Photo URL</span>
                                </label>
                                <input type="text" id="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-xl font-bold bg-orange-600 border-none">
                                    Register
                                </button>

                                <p className="text-center tracking-wide py-10 font-semibold">Or Sign In with</p>
                                <div className="flex justify-center items-center gap-6">
                                    <button type="button" className="btn btn-circle bg-transparent">
                                        <SiFacebook className="text-orange-600 text-3xl" />
                                    </button>
                                    <button type="button" className="btn btn-circle bg-transparent">
                                        <SiLinkedin className="text-orange-600 text-3xl" />
                                    </button>
                                    <button type="button" className="btn btn-circle bg-transparent">
                                        <SiGoogle className="text-orange-600 text-3xl" />
                                    </button>
                                </div>
                                <p className="text-center tracking-wide py-10 font-semibold">
                                    Already have an Account?
                                    <span>
                                        <Link to="/login" className="text-orange-600 font-bold">
                                            Login Please..
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

export default Register;
