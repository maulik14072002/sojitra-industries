import React from 'react'

import "./CustomerSupport.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CustomerSupport = () => {
    return (
        <div>
            <div className='customer_support_header text-center'>
                <h2 className='mb-2'>Defining Excellence in Quality and Customer Satisfaction</h2>
                <p>Sojitra Industries delivers precision-engineered components backed by strict quality control and a customer-first approach—ensuring reliability, consistency, and long-term trust.</p>
            </div>

            <Swiper
            className='mt-4'
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                loop={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='support_box position-relative'>
                        <figure className='our_prd_img'><img alt='' src='/img/product/cs1.jpg' /></figure>
                        <div className='our_prd_def'>
                            <h5 className='mb-2'>
                                01 / Quality at Core
                            </h5>
                            <p>At Sojitra Industries, quality is our core focus—driven by a commitment to outperform industry standards while promoting sustainable manufacturing practices.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='support_box position-relative'>
                        <figure className='our_prd_img'><img alt='' src='/img/product/cs2.jpg' /></figure>
                        <div className='our_prd_def'>
                            <h5 className='mb-2'>
                                02 / System driven operations
                            </h5>
                            <p>Sojitra Industries’ growth is driven by efficient, system-based operations. These ensure consistent quality and reliable delivery of our products.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='support_box position-relative'>
                        <figure className='our_prd_img'><img alt='' src='/img/product/cs3.jpeg' /></figure>
                        <div className='our_prd_def'>
                            <h5 className='mb-2'>
                                03 / Manufacturing Powerhouse
                            </h5>
                            <p>Sojitra Industries’ robust manufacturing capacity makes us the preferred choice for brass solutions. We deliver products tailored to your specific requirements.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='support_box position-relative'>
                        <figure className='our_prd_img'><img alt='' src='/img/product/cs4.jpg' /></figure>
                        <div className='our_prd_def'>
                            <h5 className='mb-2'>
                                04 / Remarkable R&D capabilities
                            </h5>
                            <p>Our in-house Research and Development team specializes in reengineering and developing precise products tailored for your most demanding and unique applications.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='support_box position-relative'>
                        <figure className='our_prd_img'><img alt='' src='/img/product/cs5.jpg' /></figure>
                        <div className='our_prd_def'>
                            <h5 className='mb-2'>
                                05 / Customization beyond limits
                            </h5>
                            <p>We provide custom solutions and products based on customer designs, offering multiple options for private labeling and tailored partnerships to suit your needs.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default CustomerSupport
