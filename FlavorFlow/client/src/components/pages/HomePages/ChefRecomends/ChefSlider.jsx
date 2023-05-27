/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
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

import useMenuHooks from '../../../../hooks/useMenuHooks';
import SharedCard from '../../../layouts/shared/SharedCard';

const ChefSlider = () => {
    const [menuData] = useMenuHooks();
    const popular = menuData.filter((el) => el.category === 'popular');
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
            {popular &&
                popular.map((el) => (
                    <SwiperSlide key={el._id}>
                        <SharedCard items={el} />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default ChefSlider;
