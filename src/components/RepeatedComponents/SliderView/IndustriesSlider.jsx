import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import data from "./industries.json"

// Import Swiper styles
import 'swiper/css';

import "./SliderView.css"


const IndustriesSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >

                {
                    data.map((i) =>
                        <SwiperSlide>
                            <div className='industries_box text-center py-5 px-4'>
                                <img src={i.img} alt={i.img} width="50px" />
                                <h4 className='mt-3'>{i.Industries_name}</h4>
                                <p className='mt-2 two-line-ellipsis'>{i.Def}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

export default IndustriesSlider
