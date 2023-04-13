/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

function Register() {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  const { userName, email, password } = formDetails;

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
    if (e.target.id === "password") {
      const newPassword = e.target.value;
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      const isPasswordValid = passwordRegex.test(newPassword);

      // Update the isValid state based on the password validation result
      setIsValid(isPasswordValid);
    }
  };
  const auth = getAuth(app);
  const naigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);

    if (!isValid) {
      // Show an error message and return if the password is not valid
      setIsloading(false);
      return;
    }

    const emailVerification = (emails) => {
      sendEmailVerification(emails).then(() => {
        // Email verification sent!
        // ...
        toast.error("Please verify your email address!!");
      });
    };

    const updateUserData = (user, name) => {
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          toast.success("Profile is Updated!!!");
        })
        .catch((error) => {
          toast.error(`Error Occured${error}`);
        });
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user.email);

        setIsloading(false);
        emailVerification(user);
        updateUserData(user, userName);
        naigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-violet-500 font-bold text-center py-10">
        Register Page
      </h1>

      {isValid ? (
        <p>Password is valid!</p>
      ) : (
        <p className="text-center font-bold text-red-500">
          Password must be at least 8 characters long and contain at least one
          uppercase letter, one lowercase letter, and one number.
        </p>
      )}
      {isLoading && (
        <div className="w-1/2 mx-auto h-4 bg-gray-200 rounded-full">
          <div className="h-full p-3 text-center bg-blue-500 rounded-full animate-pulse">
            Loading
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        <form
          className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="userName"
            >
              UserName
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="Enter your userName"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
