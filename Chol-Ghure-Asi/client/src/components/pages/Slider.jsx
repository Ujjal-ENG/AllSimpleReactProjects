/* eslint-disable react/jsx-no-bind */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
// import Swiper core and required modules
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Slider({ data }) {
    const [indexes, setIndex] = useState(0);

    function handleSlideChange(swiper) {
        console.log('Current slide index:', swiper.realIndex);
        setIndex(swiper.realIndex);
    }

    return (
        <Swiper
            className="max-w-5xl"
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={6}
            coverflowEffect={{
                rotate: 0,
                stretch: 20,
                depth: 90,
                modifier: 1,
                slideShadows: true
            }}>
            <SwiperSlide />
            {data.map((el) => (
                <SwiperSlide key={el.id}>
                    <div className={`w-80 rounded-lg h-96  shadow-xl image-full relative ${indexes === el.id ? 'border-2 border-yellow-400' : 'border-0'}`}>
                        <img src={el.image} className="w-full h-full rounded-lg object-cover" alt="Shoes" />
                        <h1 className="hover-stroke absolute -top-20 right-0 text-4xl w-full font-bold" data-text={el.title}>
                            {el.title}
                        </h1>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
