import React from 'react'

import { Col, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import './QualityControl.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

const QualityControl = () => {
    return (
        <div>

            <div className='quality_control_title text-center'>
                <h2>Precision-Crafted Brass Components for Every Industry</h2>
                <p>At Sojitra Industries, our commitment to excellence begins with a meticulous, precision-driven manufacturing process—transforming high-quality raw materials into a wide range of premium brass components trusted across industries.</p>
            </div>

            <Row className='mt-4 mt-sm-5'>
                <Col lg="6" md="12" sm="12">
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        allowTouchMove={false}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, EffectFade]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='quality_control_left_box quality_control_img1'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_left_box quality_control_img2'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_left_box quality_control_img3'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_left_box quality_control_img4'></div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col lg="6" md="12" sm="12" className='mt-4 mt-lg-0'>
                    <Swiper
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='quality_control_right_box'>
                                <h3>1. Material Selection</h3>
                                <p>Materials are selected based on specific customer requirements, ensuring the right grade and composition for each application. All incoming materials undergo rigorous inspection and quality verification before being released to the manufacturing plant.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_right_box'>
                                <h3>2. Casting & Extruding</h3>
                                <p>During the casting or extrusion of rods, various quality tests are conducted to ensure material integrity. These include Spectrochemical Analysis, Elongation Testing, Tensile Strength Measurement, and other critical evaluations.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_right_box'>
                                <h3>3. Machining and Shaping</h3>
                                <p>All products undergoing forging or machining operations are subjected to stringent quality checks, including in-process inspections, first-piece approvals, and incoming material verification. These inspections are continuously carried out across the shop floor to ensure consistent quality and dimensional accuracy.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='quality_control_right_box'>
                                <h3>4. Finishing and Polishing</h3>
                                <p>Brass components with various surface finishes are selected for final inspection, during which each product undergoes a detailed visual examination using high-precision camera-based inspection systems. Where required, additional checks are performed manually by trained personnel to ensure flawless quality.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>

        </div>
    )
}

export default QualityControl
