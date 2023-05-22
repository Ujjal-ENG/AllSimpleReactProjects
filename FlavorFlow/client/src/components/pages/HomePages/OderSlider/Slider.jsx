/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-unresolved */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import img1 from '../../../../assets/home/slide1.jpg';
import img2 from '../../../../assets/home/slide2.jpg';
import img3 from '../../../../assets/home/slide3.jpg';
import img4 from '../../../../assets/home/slide4.jpg';
import img5 from '../../../../assets/home/slide5.jpg';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: true
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}
            modules={[Pagination]}
            className="max-w-6xl mx-auto">
            <SwiperSlide className="relative">
                <img src={img1} alt="img1" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:-translate-x-2" />
                <h3 className="absolute bottom-4  text-3xl left-20 font-semibold text-white">SALADS</h3>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src={img2} alt="img2" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
                <h3 className="absolute bottom-4  text-3xl left-20 font-semibold text-white">PIZZAS</h3>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src={img3} alt="img3" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
                <h3 className="absolute bottom-4  text-3xl left-20 font-semibold text-white">SOUPS</h3>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src={img4} alt="img4" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
                <h3 className="absolute bottom-4  text-3xl left-20 font-semibold text-white">DESERTS</h3>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <img src={img5} alt="img5" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
                <h3 className="absolute bottom-4  text-3xl left-14 font-semibold text-white">VEGETABLES</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
