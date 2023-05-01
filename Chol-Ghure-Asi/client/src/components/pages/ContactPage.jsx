/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Navbar from '../layouts/Navbar';

function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
                        <p className="mt-4 text-lg text-gray-500">We'd love to hear from you! Please use the information below to get in touch with us.</p>
                        <div className="mt-8 flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <FaPhone className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                <p className="mt-2 text-base text-gray-500">+880 1234567890</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <FaEnvelope className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                <p className="mt-2 text-base text-gray-500">info@example.com</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <FaMapMarkerAlt className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    123 Main St
                                    <br />
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm mt-1 block w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    className="py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm mt-1 block w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        required
                                        className="py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm mt-1 block w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows="4" className="py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm mt-1 block w-full" required />
                                </div>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
