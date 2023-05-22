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
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="max-w-6xl mx-auto">
            <SwiperSlide>
                <img src={img1} alt="img1" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:-translate-x-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="img2" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="img3" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="img4" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="img5" className="rounded-xl object-cover duration-200 transition-all ease-in-out hover:scale-110 hover:translate-x-2" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
