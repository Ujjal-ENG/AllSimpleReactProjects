/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */

import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../../assets/verified.png';
import '../../index.css';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const TrustedAssociate = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 to-teal-900 relative">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-5xl font-semibold tracking-wider px-10 pt-14 text-teal-700">Find Trusted Associate</h2>
                    <p className=" pb-10 px-10 text-xl tracking-wider text-black">Find the best Fliqa Associate for your Special Day</p>
                </div>
                <div className="px-10 flex justify-center items-center ">
                    <h3 className="text-3xl font-bold">swipe the slide for more picture </h3>
                    <IoIosArrowForward size={34} />
                    <IoIosArrowForward size={34} />
                </div>
            </div>
            <div className="px-20 py-10">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                    freeMode
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/1760901/pexels-photo-1760901.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96 h-96 rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="avatar"
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="bg-gray-900 text-white w-96 rounded-b-2xl h-20 flex justify-between items-center pl-5">
                            <div>
                                <h1 className="text-xl">Name Title</h1>
                                <p className="text-xs">Location</p>
                            </div>
                            <div className="w-48">
                                <img src={logo} alt="logo" className="w-full h-20 object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="absolute w-8 h-8 rounded-full bg-white top-40 right-1/2" />
            <div className="absolute w-4 h-4 rounded-full bg-white top-20 right-1/2" />
        </div>
    );
};

export default TrustedAssociate;
