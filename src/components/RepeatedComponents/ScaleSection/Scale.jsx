import React from 'react'
import './Scale.css'
import { Col, Row } from 'react-bootstrap'
import { RiTeamLine } from 'react-icons/ri'
import { IoMedalOutline } from 'react-icons/io5'
import { GrValidate } from 'react-icons/gr'

const Scale = () => {
    return (
        <div className='scale_main'>
            <div className='scale_header text-center'>
                <h2>INTERNATIONAL SCALE</h2>
                <p>We help organizations streamline their operations and expand confidently across global markets.<br />
                    Our solutions are designed to make international growth simple, scalable, and sustainable.</p>
            </div>
            <Row className='mt-4 mt-md-5 justify-content-center'>
                <Col lg="4" md="6" sm="12">
                    <div className='scale_box'>
                        <span><RiTeamLine /></span>
                        <div className='mt-2'>
                            <h4>Leadership</h4>
                            <p>Our mission is to deliver exceptional products, exceed customer expectations, and build lasting relationships through quality, innovation, and continuous improvement.</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" sm="12" className='mt-4 mt-md-0'>
                    <div className='scale_box'>
                        <span><IoMedalOutline /></span>
                        <div className='mt-2'>
                            <h4>Vision</h4>
                            <p>Our vision is to be a globally respected leader in premium brass hardware and glassware solutions.
                                We are dedicated to setting benchmarks in innovation, product excellence, and customer satisfaction.</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="6" sm="12" className='mt-4 mt-lg-0'>
                    <div className='scale_box'>
                        <span><GrValidate /></span>
                        <div className='mt-2'>
                            <h4>Core values</h4>
                            <p>We are guided by core values of integrity, uncompromising quality, and a commitment to innovation.
                                Customer satisfaction and continuous improvement are at the heart of everything we do.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Scale
