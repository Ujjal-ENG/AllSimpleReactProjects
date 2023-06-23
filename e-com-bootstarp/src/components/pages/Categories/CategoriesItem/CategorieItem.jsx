/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryCard from './CategoryCard';
import './slider.css';

const CategorieItem = () => {
    return (
        <div>
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
                className="mySwiper">
                <SwiperSlide>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <CategoryCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategorieItem;
