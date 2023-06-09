/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Img from '../../assets/footer.png';

function Footer() {
    return (
        <div className="bg-gray-800">
            <img src={Img} alt="footer" className="object-cover w-full " />
            <footer className=" py-12 w-screen mx-auto max-w-7xl">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <h3 className="text-3xl text-white font-bold">Coffee Express</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-gray-100">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-100">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-100">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto mt-6 flex flex-col md:flex-row justify-between items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="appearance-none bg-gray-900 border border-gray-500 w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-800"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="appearance-none bg-gray-900 border border-gray-500 w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-800"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full px-3">
                                <textarea
                                    placeholder="Message"
                                    className="appearance-none bg-gray-900 border border-gray-500 w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:bg-gray-800"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap  mt-4">
                            <div className="w-full px-3">
                                <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <div className="text-white">hello</div> */}
                    <div className="max-w-2xl mx-auto text-white py-8 px-4 md:px-8">
                        <h2 className="text-3xl font-bold mb-4">Coffee Expresso</h2>
                        <p className="text-gray-300 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim et nisl sagittis, eget laoreet metus lacinia. Nam vulputate massa non odio congue, et bibendum
                            nulla lobortis. Aliquam erat volutpat. Fusce maximus tortor in velit iaculis, eu ultrices libero fermentum. Duis euismod magna quis mauris tristique dignissim.
                        </p>
                    </div>

                    <div className="text-gray-400 text-sm">
                        <p className="mb-2">123 Coffee Street</p>
                        <p className="mb-2">New York, NY 10001</p>
                        <p className="mb-2">1-800-555-1234</p>
                        <p>info@coffeeexpress.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
