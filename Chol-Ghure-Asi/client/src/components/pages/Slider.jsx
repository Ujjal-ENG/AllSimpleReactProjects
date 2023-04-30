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

function Slider() {
    const [indexes, setIndex] = useState(-1);
    function handleSlideChange(index) {
        console.log('Current slide index:', index.activeIndex);
        setIndex(index.activeIndex);
    }
    return (
        <Swiper
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            coverflowEffect={{
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows: true
            }}>
            <SwiperSlide>
                <div className={`w-80 rounded-lg h-96  shadow-xl image-full relative ${indexes === 0 ? 'border-2 border-yellow-400' : 'border-0'}`}>
                    <img
                        src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-full rounded-lg object-cover"
                        alt="Shoes"
                    />
                    <h1 className="hover-stroke absolute -top-20 right-0 text-4xl w-full font-bold" data-text="Cox's Bazar">
                        Cox's Bazar
                    </h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`w-80 rounded-lg h-96  shadow-xl image-full relative ${indexes === 1 ? 'border-2 border-yellow-400' : 'border-0'}`}>
                    <img
                        src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-full rounded-lg object-cover"
                        alt="Shoes"
                    />
                    <h1 className="hover-stroke absolute -top-20 right-0 text-4xl w-full font-bold" data-text="Cox's Bazar">
                        Cox's Bazar
                    </h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`w-80 rounded-lg h-96  shadow-xl image-full relative ${indexes === 2 ? 'border-2 border-yellow-400' : 'border-0'}`}>
                    <img
                        src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-full rounded-lg object-cover"
                        alt="Shoes"
                    />
                    <h1 className="hover-stroke absolute -top-20 right-0 text-4xl w-full font-bold" data-text="Cox's Bazar">
                        Cox's Bazar
                    </h1>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
