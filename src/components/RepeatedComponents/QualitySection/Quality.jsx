import React from 'react'
import { Col, Row } from 'react-bootstrap'

import "./Quality.css"

const Quality = () => {
    return (
        <div className='quality_main'>
            <Row>
                <Col lg={6} md={12}>
                    <div className='position-relative standerd_navigat'>
                        <div className='standerd_img'></div>
                        <div className='standerd_text_box curser-pointer'>
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <div className='standerd_text_box_title'>
                                    <h5>TOP QUALITY</h5>
                                    <p>for all our products</p>
                                </div>
                                <span>GUARANTEED</span>
                            </div>
                            <p className='standers_def'>MSH Metal Craft is committed to delivering high-quality products and services. We continually enhance our processes to ensure customer satisfaction.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className='standerd_intro mt-lg-0 mt-4'>
                        <h2>GUARANTEED QUALITY</h2>
                        <p>MSH Metal Craft upholds the highest standards of quality through rigorous Quality Assurance and Control processes, ensuring precision, reliability, and full compliance with customer specifications. Our continuous skill development and training programs enable us to consistently deliver superior products and exceptional service worldwide.</p>
                        <ul className='mt-4'>
                            <li>Weekly quality checks</li>
                            <li>Technology-assisted operations</li>
                            <li>Products developed from scratch</li>
                            <li>Employee safety</li>
                            <li>Only the best materials</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Quality
