/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import React, { useRef } from 'react';
import ReactStars from 'react-rating-stars-component';
import './Reviews.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const Reviews = ({ data }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
                delay: 4500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper">
            {data.map((el) => (
                <SwiperSlide key={el._id}>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <div className="flex justify-center items-center mb-5">
                                    <ReactStars
                                        value={el.rating}
                                        count={5}
                                        size={34}
                                        edit={false}
                                        isHalf
                                        emptyIcon={<i className="far fa-star" />}
                                        halfIcon={<i className="fa fa-star-half-alt" />}
                                        fullIcon={<i className="fa fa-star" />}
                                        activeColor="#ffd700"
                                    />
                                    ,
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-20 h-20 text-black mb-8" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                                </svg>
                                <p className="leading-relaxed text-lg">{el.details}</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
                                <h2 className="text-yellow-400 font-medium title-font tracking-wider text-3xl uppercase">{el.name}</h2>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20" />
                </svg>
                <span ref={progressContent} />
            </div>
        </Swiper>
    );
};

export default Reviews;
