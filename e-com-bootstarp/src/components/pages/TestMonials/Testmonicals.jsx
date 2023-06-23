/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import SliderCard from './SliderCard';

const Testmonicals = () => {
    return (
        <div className="p-5 min-vh-100" style={{ backgroundColor: '#06202d' }}>
            <div className="container-xl mx-auto ">
                <h1 className="display-4 text-center pb-4 fw-bold text-white">Classes Taught by Distinguished Experts</h1>
                <div
                    className="bg-success rounded"
                    style={{
                        height: '10px',
                        maxWidth: '24rem',
                        margin: '0 auto'
                    }}
                />
                <p className="lead text-center pt-4 text-white">
                    Uplyrn lecturers have taught professionally or have been sharing online classes for years. The courses they have put together are the ones you can trust. Yep, trust us on that one.
                </p>
            </div>

            {/* <TestmonialSlider /> */}
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    watchSlidesProgress
                    pagination={{
                        clickable: true,
                        renderBullet(index, className) {
                            return `<span class="${className}">${index + 1}</span>`;
                        }
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper mt-5">
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                    <SwiperSlide className="w-25">
                        <SliderCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testmonicals;
