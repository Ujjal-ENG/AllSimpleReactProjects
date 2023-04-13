/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */

import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

function Login() {
  const emailRef = useRef();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formDetails;

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        navigate("/");
        toast.success(`Login SuccessFull and welcome: ${user.displayName}`);
        // ...
      })
      .catch((error) => {
        toast.error(`error occured: ${error}`);
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    const emailed = emailRef.current.value;
    if (!emailed) {
      toast.error(
        "please provide your email address to change the password!!!"
      );
    }
    sendPasswordResetEmail(auth, emailed)
      .then(() => {
        // Password reset email sent!
        // ..
        toast.success(
          "please go to your email and reset your password there!!"
        );
      })
      .catch((error) => {
        toast.error(error);
        // ..
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-violet-500 font-bold text-center py-10">
        Login Form
      </h1>
      <form
        className="w-full max-w-md p-6 mx-auto rounded-lg shadow-md bg-gray-100"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center mb-6">Sign In</h2>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            ref={emailRef}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <h3 className="text-xl font-bold text-red-500">
            {" "}
            <small>
              Forget Password??
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </small>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
