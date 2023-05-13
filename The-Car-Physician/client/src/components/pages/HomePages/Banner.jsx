/* eslint-disable import/no-unresolved */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImg1 from '../../../assets/images/banner/1.jpg';
import BannerImg2 from '../../../assets/images/banner/2.jpg';
import BannerImg3 from '../../../assets/images/banner/3.jpg';
import BannerImg4 from '../../../assets/images/banner/4.jpg';
import BannerImg5 from '../../../assets/images/banner/5.jpg';
import BannerImg6 from '../../../assets/images/banner/6.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay, Pagination]}
            className="h-[600px] rounded-xl">
            <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="carousel">
                <SwiperSlide id="slide1" className="carousel-item relative">
                    <img src={BannerImg1} className="w-full rounded-xl " />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide6" className="btn btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle  opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide2" className="carousel-item relative ">
                    <img src={BannerImg2} className="w-full rounded-xl" />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide1" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide3" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide3" className="carousel-item relative ">
                    <img src={BannerImg3} className="w-full rounded-xl" />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide2" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide4" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide4" className="carousel-item relative ">
                    <img src={BannerImg4} className="w-full rounded-xl" />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide3" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide5" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide5" className="carousel-item relative ">
                    <img src={BannerImg5} className="w-full rounded-xl" />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide4" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide6" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="slide6" className="carousel-item relative ">
                    <img src={BannerImg6} className="w-full rounded-xl" />
                    <div className="absolute  max-w-2xl rounded-xl justify-start gap-10 top-0 left-0 transform bottom-0  bg-gradient-to-r from-gray-900 to-transparent ">
                        <div className="ml-24 space-y-7 h-full flex justify-center items-start flex-col">
                            <h1 className="text-white font-bold text-6xl tracking-wider w-[460px]">Affordable Price For Car Servicing</h1>
                            <p className="text-white  text-xl tracking-widest">There are many variations of passages of available, but the majority have suffered alteration in some form</p>

                            <div className="flex items-center gap-4">
                                <button type="button" className="btn bg-orange-500 border-none">
                                    Discover More
                                </button>
                                <button type="button" className="btn text-white btn-outline border-white">
                                    Latest Projects
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide5" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❮
                        </a>
                        <a href="#slide1" className="btn  btn-circle opacity-60 hover:opacity-100 hover:bg-orange-600 hover:text-white hover:border-none">
                            ❯
                        </a>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    );
};

export default Banner;
