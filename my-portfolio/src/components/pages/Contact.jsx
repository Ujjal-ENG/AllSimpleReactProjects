/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATEID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`);

        Swal.fire({
            icon: 'success',
            title: 'Thank you for reaching out to me via email!!',
            showConfirmButton: false,
            timer: 1500
        });
        e.target.reset();
    };
    return (
        <div data-aos="fade-up" className="h-screen absolute w-full" id="contact">
            <section className="mb:py-10 pt-20  bg-gradient-to-r w-full from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Contact Me</h2>
                        <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-white">
                            Thank you for taking the time to review my profile. If you have any inquiries or would like to discuss potential opportunities, please feel free to reach out to me. I am
                            always open to new collaborations and exciting projects.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-2xl font-semibold text-black">Send me a message</h3>

                                    <form ref={form} onSubmit={sendEmail} className="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    Your name
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter Your Full Name"
                                                        required
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    Your email
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter Your Valid Email"
                                                        required
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    Phone number
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <input
                                                        type="tel"
                                                        name=""
                                                        id=""
                                                        placeholder=""
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    Company name
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        placeholder=""
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    Message
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <textarea
                                                        name="message"
                                                        placeholder="PLease Write Your Details Message to me"
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        rows="4"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                    Send Me😊😊
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="bg-gray-100 lg:col-span-2">
                                <div className="h-full p-6 sm:p-10">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h4 className="text-2xl font-semibold text-black">Contact info</h4>

                                            <div className="mt-8 space-y-7">
                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="block ml-3 text-base text-gray-900"> Mirpur 10,Dhaka </span>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span className="block ml-3 text-base text-gray-900"> ujjalroy7862@gmail.com </span>
                                                </div>

                                                <div className="flex items-start">
                                                    <svg className="flex-shrink-0 text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <div className="ml-3">
                                                        <span className="block text-base text-gray-900"> +880179842140 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 lg:mt-auto">
                                            <hr className="border-gray-200" />
                                            <div className="flex items-center justify-between mt-7">
                                                <p className="text-lg font-semibold text-black">Follow us on</p>

                                                <ul className="flex items-center justify-end space-x-3">
                                                    <li>
                                                        <a
                                                            href="https://www.facebook.com/ujjal.roy.7862"
                                                            target="_blank"
                                                            className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                "
                                                            rel="noreferrer">
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                                            </svg>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            href="https://github.com/Ujjal-ENG"
                                                            target="_blank"
                                                            className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                // eslint-disable-next-line react/jsx-closing-bracket-location
                                                "
                                                            rel="noreferrer">
                                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
